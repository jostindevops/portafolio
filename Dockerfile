# Build stage: compila la app Angular
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
COPY angular.json ./
COPY tsconfig*.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY src ./src

RUN npm install -g @angular/cli@17
RUN npm install
RUN ng build --configuration=production

# Depuración: lista el contenido de dist para verificar el nombre de la carpeta
RUN ls -l /app/dist

# Stage final: Nginx para servir la app
FROM nginx:alpine

# Copia el contenido del build de Angular al directorio de Nginx
COPY --from=build /app/dist/devsecops-dashboard/browser /usr/share/nginx/html

# Copiar certificados TLS
COPY etc/tls/tls.crt /etc/nginx/tls/tls.crt
COPY etc/tls/tls.key /etc/nginx/tls/tls.key


# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Los certificados deben estar montados en /etc (por ejemplo, /etc/certs)
# Se asume que nginx.conf los referencia correctamente

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]


