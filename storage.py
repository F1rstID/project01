import boto3

# ACCESS_KEY = "AKIAXDUCX6BN6DJT5YHR"
# SECRET_KEY = "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"
# BUCKET = "test-buzz-bucket"
ACCESS_KEY = "AKIA4SXRXEFCH535AXXB"
SECRET_KEY = "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"
BUCKET = "sparata-sjw"


def connection():
    try:
        # s3 클라이언트 생성
        s3 = boto3.client(
            service_name="s3",
            region_name="ap-northeast-2",
            aws_access_key_id=ACCESS_KEY,
            aws_secret_access_key=SECRET_KEY
        )
    except Exception as e:
        print(e)
    else:
        print("s3 bucket connected!")
        return s3
