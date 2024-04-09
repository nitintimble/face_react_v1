import boto3
import json

def get_results_handler(event, context):
    client = boto3.client('rekognition')
    return client.get_face_liveness_session_results(
        SessionId=event['session']
    )    





# import json

# def handler(event, context):
#   print('received event:')
#   print(event)
  
#   return {
#       'statusCode': 200,
#       'headers': {
#           'Access-Control-Allow-Headers': '*',
#           'Access-Control-Allow-Origin': '*',
#           'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
#       },
#       'body': json.dumps('Hello from your new Amplify Python lambda!')
#   }