pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'echo "iniciando o build"'
        sh 'ls -l'
      }
    }
    stage('Tests') {
      steps {
        sh 'pwd'
      }
    }
    stage('Aprovacao'){
      steps {
	input 'Aprova o deploy?'
      }
    }
    stage('Deploy'){
      steps {
	sh 'fazendo deploy'
      }
    }
  }
}
