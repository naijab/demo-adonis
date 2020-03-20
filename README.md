# Demo Adonis

## How to run

1. Copy `.env.example` to `.env` 
2. Edit Database Connection and Mail Server in `.env` 
3. `adonis key:generate` - for first
4. `adonis migration:run` - for create table
5. `adonis seed` - for create mock user and booking

## Booking Status

1. **PENDING** - when create booking
2. **WAITING** - wait a confirmation from email
3. **CONFIRM** - confirmed from email
4. **COMPLETED** - completed a booking

## Demo List

1. Send Booking Confirmation to Email

   > [http://localhost:3333/bookings/{user-id-in-database}/send/confirm](http://localhost:3333/bookings/1/send/confirm)

2. Confirmation booking in Mail with Click link

