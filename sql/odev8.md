# SORU 1
test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
```
CREATE TABLE employee(
id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	birthday DATE,
	email VARCHAR(100)
);
```

# SORU 2
Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
```
insert into employee (id, name, birthday, email) values (1, 'Clemente', null, 'cwyld0@home.pl');
insert into employee (id, name, birthday, email) values (2, 'Goldy', '2021-03-04', null);
insert into employee (id, name, birthday, email) values (3, 'Gabriell', '2021-02-24', 'gpietrzak2@tinypic.com');
insert into employee (id, name, birthday, email) values (4, 'Isabelle', '2021-07-13', 'irizzini3@hexun.com');
insert into employee (id, name, birthday, email) values (5, 'Markus', null, 'mlanchberry4@walmart.com');
insert into employee (id, name, birthday, email) values (6, 'Selina', '2021-03-06', 'sgrugerr5@hc360.com');
insert into employee (id, name, birthday, email) values (7, 'Mendy', '2021-10-01', 'mthompson6@phoca.cz');
insert into employee (id, name, birthday, email) values (8, 'Octavius', null, 'odadge7@narod.ru');
insert into employee (id, name, birthday, email) values (9, 'Milly', '2021-11-17', 'mmacculloch8@sphinn.com');
insert into employee (id, name, birthday, email) values (10, 'Jeanelle', null, 'jchalliner9@boston.com');
insert into employee (id, name, birthday, email) values (11, 'Maurie', '2022-01-25', 'mfeethama@ycombinator.com');
insert into employee (id, name, birthday, email) values (12, 'Bella', '2021-05-26', 'bfinkb@mapquest.com');
insert into employee (id, name, birthday, email) values (13, 'Barde', '2021-12-08', 'belliotc@chron.com');
insert into employee (id, name, birthday, email) values (14, 'Gabriele', null, 'gtukelyd@independent.co.uk');
insert into employee (id, name, birthday, email) values (15, 'Gretel', null, 'gmattinsone@sun.com');
insert into employee (id, name, birthday, email) values (16, 'Son', null, 'shirchef@blinklist.com');
insert into employee (id, name, birthday, email) values (17, 'Laurice', null, 'lgallong@google.nl');
insert into employee (id, name, birthday, email) values (18, 'Davide', '2021-08-28', 'dhazelhursth@altervista.org');
insert into employee (id, name, birthday, email) values (19, 'Loren', '2021-08-01', 'labbessi@who.int');
insert into employee (id, name, birthday, email) values (20, 'Phoebe', null, 'pbertomierj@dmoz.org');
insert into employee (id, name, birthday, email) values (21, 'Andi', '2021-08-27', 'adenialk@cmu.edu');
insert into employee (id, name, birthday, email) values (22, 'Lavena', '2021-04-20', 'lleecel@ebay.co.uk');
insert into employee (id, name, birthday, email) values (23, 'Josey', '2021-11-28', null);
insert into employee (id, name, birthday, email) values (24, 'Marney', '2021-04-27', 'mferedayn@squarespace.com');
insert into employee (id, name, birthday, email) values (25, 'Sibella', '2021-04-08', 'sgumeyo@over-blog.com');
insert into employee (id, name, birthday, email) values (26, 'Kassie', '2021-10-17', 'ktidboldp@gmpg.org');
insert into employee (id, name, birthday, email) values (27, 'Ina', '2021-03-15', 'ikolczynskiq@ow.ly');
insert into employee (id, name, birthday, email) values (28, 'Bette', null, 'bwalkerr@vistaprint.com');
insert into employee (id, name, birthday, email) values (29, 'Dre', '2021-08-08', 'daxtells@epa.gov');
insert into employee (id, name, birthday, email) values (30, 'Veriee', '2021-10-09', 'vwindleyt@fema.gov');
insert into employee (id, name, birthday, email) values (31, 'Richmond', '2021-12-03', 'rjosephyu@github.io');
insert into employee (id, name, birthday, email) values (32, 'Friederike', '2021-12-07', 'fvelav@opera.com');
insert into employee (id, name, birthday, email) values (33, 'Cordy', '2021-09-27', 'cburrilw@zdnet.com');
insert into employee (id, name, birthday, email) values (34, 'Rowland', '2021-06-06', 'rmaciaszczykx@ifeng.com');
insert into employee (id, name, birthday, email) values (35, 'Cristie', '2021-10-18', 'cpaolazziy@bbb.org');
insert into employee (id, name, birthday, email) values (36, 'Humfrey', null, 'hhaselupz@woothemes.com');
insert into employee (id, name, birthday, email) values (37, 'Boote', '2022-01-29', 'btippetts10@ovh.net');
insert into employee (id, name, birthday, email) values (38, 'Mike', '2021-05-24', 'mjancic11@japanpost.jp');
insert into employee (id, name, birthday, email) values (39, 'Emilio', null, 'eucchino12@miibeian.gov.cn');
insert into employee (id, name, birthday, email) values (40, 'Carol-jean', '2021-06-04', 'cbrownlow13@answers.com');
insert into employee (id, name, birthday, email) values (41, 'Francklin', '2021-11-24', 'fpellett14@artisteer.com');
insert into employee (id, name, birthday, email) values (42, 'Carce', '2021-10-17', 'ctombleson15@ucla.edu');
insert into employee (id, name, birthday, email) values (43, 'Clarence', '2021-04-21', 'cbroughton16@so-net.ne.jp');
insert into employee (id, name, birthday, email) values (44, 'Patton', '2022-01-07', 'psinson17@plala.or.jp');
insert into employee (id, name, birthday, email) values (45, 'Rae', '2021-10-08', 'rspence18@time.com');
insert into employee (id, name, birthday, email) values (46, 'Nels', '2021-03-26', 'njeandeau19@si.edu');
insert into employee (id, name, birthday, email) values (47, 'Talbot', '2021-10-19', 'tbattye1a@123-reg.co.uk');
insert into employee (id, name, birthday, email) values (48, 'Bink', '2021-03-05', 'bstolze1b@ebay.com');
insert into employee (id, name, birthday, email) values (49, 'Aleda', '2021-08-27', 'abowlesworth1c@sciencedaily.com');
insert into employee (id, name, birthday, email) values (50, 'Carole', null, 'cbircher1d@multiply.com');
```

# SORU 3
Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
```
UPDATE employee
SET name = 'UPDATE'
WHERE name LIKE 'M%';
```

# SORU 4
Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
```
DELETE FROM employee
WHERE name = 'UPTADE';
```