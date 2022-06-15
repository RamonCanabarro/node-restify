pipeline {
    environment {
        registry = 'ramoncanabarro/node-restiry'
        registryCredential = credentials('dockerId')
    }
    agent any
    stages {
        stage('Building our image') {
            steps {
                sh 'docker build -t $registry:latest .'
            }
        }
        stage('login') {
            steps {
                sh 'echo $registriCrendetial_PSW | docker login -u $registriCedential_USR --password-stdin'
            }
        }
        stage('push') {
            steps {
                script {
                    sh 'docker push $registry:$BUILD_NUMBER'
                }
            }
        }
        stage('Cleaning up') {
            steps {
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
    }
}
