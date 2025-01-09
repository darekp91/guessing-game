# Guessing Game

## Opis
Aplikacja "Guessing Game" to projekt umożliwiający grę w zgadywanie liczb z zapisem wyników do bazy danych.

## Funkcjonalności
- Gra w zgadywanie liczb z różnymi poziomami trudności.
- Zapis wyników do bazy danych.
- Filtrowanie wyników po dacie, użytkowniku i poziomie trudności.

## Instalacja
1. Backend:
   - Wymagania: Java 17, Maven, MySQL.
   - Uruchom polecenie: `mvn spring-boot:run`.
2. Frontend:
   - Wymagania: Node.js, npm.
   - Uruchom polecenie: `npm start`.

## API Backend
- **Zapis wyniku:** `POST /scores`
- **Filtrowanie wyników:** `GET /scores/filter`
- **Filtrowanie po dacie:** `GET /scores/filterByDate`


