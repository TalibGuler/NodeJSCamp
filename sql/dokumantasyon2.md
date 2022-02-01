--CREATE TABLE <table_name> (
--	<column_name> <data_type> <constraint>,
--	...
--	<column_name> <data_type> <constraint>;
--)

CREATE TABLE author (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50),
	birthday DATE
);



INSERT INTO author (first_name, last_name, email, birthday)
VALUES
	('Talib', 'GÜLER', 'talib@guler.com', '1999-02-09'),
	('Sabahattin', 'ALİ', 'sabahattin@ali.com', '1914-07-11');	



CREATE TABLE author2 (LIKE author);

INSERT INTO author2
SELECT * FROM author
WHERE first_name = 'Sabahattin';

CREATE TABLE author3 AS
SELECT * FROM author;

DROP TABLE author2;

DROP TABLE IF EXISTS author4;


--UPDATE <table_name>
--SET column1=value1,
--	column2=value2,
--	.....
--WHERE condition;

UPDATE author
SET first_name = 'Emrah Safa',
	last_name = 'Gürkan',
	email = 'emrah@gurkan.com',
	birthday = '1980-01-01'
WHERE id = 10;


UPDATE author
SET last_name = 'UPDATE'
WHERE first_name = 'Arturo'
RETURNING *;


--DELETE FROM <table_name>
--WHERE condition;

DELETE FROM author
WHERE id= '6';  


DELETE FROM author
WHERE id= '6';
RETURNING *;


ALTER TABLE users
ALTER COLUMN username
SET NOT NULL ;

DELETE FROM users
WHERE username IS NULL;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(20) NOT NULL,
	email VARCHAR(50) UNIQUE,
	age INTEGER
);

ALTER TABLE users
ADD UNIQUE (email);


-- KISITLAMA

-- var olan tablo
ALTER TABLE users
ADD CHECK (age > 18);

-- yeni oluşturulan tablo

CREATE TABLE products (
	product_no integer,
	name text,
	price number CHECK (price > 0),
	discounted_price numeric CHECK (discounted_price > 0),
	CHECK (price > discounted_price)
);

# INNER JOIN
SELECT title , first_name, last_name FROM book
INNER JOIN author ON author.id = book.author_id;

# LEFT JOIN
SELECT first_name, last_name, title FROM author
LEFT JOIN book ON author.id = book.author_id;

# RIGHT JOIN


# FULL JOIN
SELECT first_name, last_name, title FROM book
FULL JOIN author ON book.author_id= author.id;

SELECT first_name, last_name, title FROM book
FULL JOIN author ON book.author_id= author.id
WHERE (book.id IS NOT NULL AND author.id IS NOT NULL);

# UNION

--SELECT * FROM book
--ORDER BY page_number DESC
--LIMIT 5;

--SELECT * FROM book
--ORDER BY title
--LIMIT 5;

-- SELECT İLE ELDE ETTİGİMİZ birden DAHA fazla SORGUYU BİRLESTİRMEK icin

(SELECT * FROM book
ORDER BY page_number DESC
LIMIT 5
)
UNION ALL
(SELECT * FROM book
ORDER BY title
LIMIT 5
);

-- sutun sayıları aynı olacak ve veri tipleri de uyumlu olmalı

(SELECT id, email FROM author
)
UNION 
(SELECT id, title FROM book
);

# INTERSECT

-- KESİSİMİ ALIR

(SELECT * FROM book
ORDER BY page_number DESC
LIMIT 5
)
INTERSECT 
(SELECT * FROM book
ORDER BY title
LIMIT 5
)

# EXCEPT
ilk soruda bulunan ikincide bulunmayanları getirir

(SELECT * FROM book
ORDER BY page_number DESC
LIMIT 5
)
EXCEPT 
(SELECT * FROM book
ORDER BY title
LIMIT 5
)

# SUBQUERIES

-- alt sorgular
--SELECT * FROM book
--WHERE page_number > 50 ;

--SELECT page_number FROM book
--WHERE title = 'Delta';

SELECT * FROM book
WHERE page_number > (
SELECT page_number FROM book
WHERE title = 'Delta'
);


# ANY VE ALL

-- HERHANGİ BİR DURUMDA DÖNDÜR

SELECT first_name, last_name FROM author
WHERE id = ANY
 (
	SELECT id FROM book WHERE title = 'Delta' OR title = 'Kanak Attack'
);

-- TÜM SATIRLAR İLE EŞLEŞİYOR MU ALL
-- FALSE DÖNER

SELECT first_name, last_name FROM author
WHERE id = ALL
 (
	SELECT id FROM book WHERE title = 'Delta' OR title = 'Kanak Attack'
); 

DOGRU DONER
	SELECT first_name, last_name FROM author
	WHERE id > ALL
	 (
		SELECT id FROM book WHERE title = 'Delta' OR title = 'Kanak Attack'
	);

# SUBQUERIES JOIN

-- kitap sayfası sayısı ortalama kitap sayfası sayısından fazla olan kitap isimlerini, yazar isim ve soyisimleri ile birlikte sıralayalım.

SELECT author.first_name, author.last_name, book.title, book.page_number FROM author
INNER JOIN book ON book.author_id = author.id
WHERE page_number >
(
	SELECT AVG(page_number) FROM book
);

-- film uzunluğu en fazla olan filmlerin isimlerini, uzunluğunu actor isim ve soyisimleri ile birlikte yazdıralım

SELECT actor.first_name, actor.last_name, film.title, film.length
FROM actor
JOIN film_actor ON film_actor.film_id = film_actor.film_id
JOIN film ON film.film_id = film_actor.film_id
WHERE film.length = 
(
	SELECT MAX(length) FROM film
);