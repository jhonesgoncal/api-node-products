pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'echo "iniciando o build"'
        sh 'ls -l'
        sh 'fpm -m "Jhones <jhones.goncalves@outlook.com>" --url "https://jhonesgoncalves.esy.es" --description "test package" -a noarch -s dir -t deb -n api-products --deb-user root --deb-group root -v 1.0.0 --prefix /opt/api-products/ .'  
      }
    }
    stage('Tests') {
      steps {
        sh 'pwd'
      }
    }
    stage('Aprovacao') {
      steps {
        input 'Aprova o deploy?'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo fazendo deploy'
        sh 'ls -lha'
      }
    }
  }
}
