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
Satır bazlı filtreleme uygular
```
SELECT title, length FROM film
WHERE length >= 90 AND length <= 120
```
---

# BETWEEN && IN
Hangi değer aralığında ve eşit şekilde alır
```
SELECT title, length FROM film
WHERE length BETWEEN 90 AND 120;
```

İçerisinde bulunanları getir
```
SELECT * FROM film WHERE length IN (40,50,60); -- WHERE length = 40 OR length = 50 OR length = 60
```
---

# LIKE && ILIKE

% sayısız anlamında
```
SELECT * FROM customer
WHERE first_name LIKE 'Ma%';
```
```
SELECT * FROM customer
WHERE first_name LIKE '%y';
```
```
SELECT * FROM customer
WHERE first_name ILIKE 'a%y';
```
"_"  karakter anlamında
```
SELECT * FROM customer
WHERE first_name ILIKE 'a_y';
```

# AGGREGATE
-- COUNT, MIN, MAX, AVG, SUM, ROUND