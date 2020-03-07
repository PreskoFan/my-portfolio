import json
import boto3

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    portfolio_bucket = s3.Bucket('portfolio.preskofan.com')
    for obj in portfolio_bucket.objects.all():
        print obj.key
        portfolio_bucket.Object(obj.key).Acl().put(ACL='public-read')
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
