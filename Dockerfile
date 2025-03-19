FROM openjdk:17

WORKDIR /app

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/fish895623/tasks.git --depth 1

WORKDIR /app/tasks

RUN chmod +x ./gradlew

RUN ./gradlew build -x test

CMD ["java", "-jar", "build/libs/*.jar"]
