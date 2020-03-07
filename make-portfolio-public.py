import json
import boto3

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    codepipeline = boto3.client('codepipeline')
    print("**************** This is the event - start ****************")
    print(event)
    print("**************** This is the event - end ****************")
    job_id = event['CodePipeline.job']['id']

    try:
        portfolio_bucket = s3.Bucket('portfolio.preskofan.com')
        for obj in portfolio_bucket.objects.all():
            print obj.key
            portfolio_bucket.Object(obj.key).Acl().put(ACL='public-read')
            user_parameters = event['CodePipeline.job']['data']['actionConfiguration']['configuration']['UserParameters']
            response = codepipeline.put_job_success_result(jobId=job_id)
            print(response)
            return {
                'statusCode': 200,
                'body': json.dumps('Hello from Lambda!')
            }
    except Exception as error:
        print(error)
        response = codepipeline.put_job_failure_result(
            jobId=job_id,
            failureDetails={
                'type': 'JobFailed',
                'message': '{error.__class__.__name__}: {str(error)}'
            }
        )
        print(response)
