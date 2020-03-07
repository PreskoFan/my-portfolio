import json
import logging
import boto3

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    codepipeline = boto3.client('codepipeline')
    job_id = event['CodePipeline.job']['id']
    
    try:
        portfolio_bucket = s3.Bucket('portfolio.preskofan.com')
        for obj in portfolio_bucket.objects.all():
            print obj.key
            portfolio_bucket.Object(obj.key).Acl().put(ACL='public-read')
            user_parameters = event['CodePipeline.job']['data']['actionConfiguration']['configuration']['UserParameters']
            logger.info(f'User parameters: {user_parameters}')
            response = codepipeline.put_job_success_result(jobId=job_id)
            logger.debug(response)
            return {
                'statusCode': 200,
                'body': json.dumps('Hello from Lambda!')
            }
    except Exception as error:
        logger.exception(error)
        response = codepipeline.put_job_failure_result(
            jobId=job_id,
            failureDetails={
                'type': 'JobFailed',
                'message': f'{error.__class__.__name__}: {str(error)}'
            }
        )
        logger.debug(response)
