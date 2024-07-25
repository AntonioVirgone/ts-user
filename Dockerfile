# Utilizza l'immagine ufficiale di PostgreSQL come base
FROM postgres:13

# Imposta le variabili d'ambiente necessarie
ENV POSTGRES_DB=user
ENV POSTGRES_USER=ts-user
ENV POSTGRES_PASSWORD=ts-pass

# Espone la porta 5432
EXPOSE 5432
