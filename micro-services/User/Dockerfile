FROM eclipse-temurin:22-jdk AS build

WORKDIR /app

COPY target/User-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8080

CMD ["java", "-jar", "/app/app.jar"]