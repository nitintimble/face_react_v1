import boto3
import json

def lambda_handler(event, context):
    client = boto3.client('rekognition')
    response = client.create_face_liveness_session(    
        ClientRequestToken=event['request_token']
    )
    session_id = response.get("SessionId")
    return session_id        










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
