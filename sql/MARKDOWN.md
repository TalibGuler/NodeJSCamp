# SELECT
```
SELECT colum1 FROM table1
```

Tek tablo çağırır
```
SELECT title FROM film;
```

Birden fazla tablo çağırır
```
SELECT title, film_id FROM film;
```

Hepsini çağırır
```
SELECT * FROM film;
```
---

# WHERE


# BETWEEN && IN

--SELECT title, length FROM film
--WHERE length >= 90 AND length <= 120

SELECT title, length FROM film
WHERE length BETWEEN 90 AND 120;

SELECT * FROM film WHERE length IN (40,50,60); -- WHERE length = 40 OR length = 50 OR length = 60

# LIKE && ILIKE

SELECT * FROM customer
WHERE first_name LIKE 'Ma%';

SELECT * FROM customer
WHERE first_name LIKE '%y';

SELECT * FROM customer
WHERE first_name ILIKE 'a%y';