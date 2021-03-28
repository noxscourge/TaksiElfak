# Skripta za nasu bazu podataka cassandra

CREATE KEYSPACE taksisti WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor' : 3};

USE takstisti

CREATE TABLE vozaci(id uuid, status text, trenutna_lokacija text, cena text, ime text, kompanija text, prezime text, PRIMARY KEY(id));



INSERT INTO vozaci(id, status, trenutna_lokacija,cena,ime,kompanija,prezime) VALUES (now(), 'dostupan', 'Bulevar' , '300', 'David' , 'Azdejkovic', 'Bros taksi');
INSERT INTO vozaci(id, status, trenutna_lokacija,cena,ime,kompanija,prezime) VALUES (now(), 'nedostupan', 'Bulevar' , '350', 'Igor' , 'Jovanovic', 'Pink taksi');
INSERT INTO vozaci(id, status, trenutna_lokacija,cena,ime,kompanija,prezime) VALUES (now(), 'dostupan', 'Bulevar' , '360', 'Tijana' , 'Stankovic', 'Bros taksi');
INSERT INTO vozaci(id, status, trenutna_lokacija,cena,ime,kompanija,prezime) VALUES (now(), 'dostupan', 'Bulevar' , '360', 'Bojana' , 'Svilenkovic', 'Eko taksi');

-------------------------------------------------------------------------------------------------------------------------
//napomena, da bi sve funkcionisalo ispravno potrebno je zaista uneti pravi ID koji generise now() u tabelici vozaci
//savetujem da je bolje praviti putem create opcije kako bi sve islo kako treba (u aplikaciji samoj), jer u datom primeru skripte koristicu 1 isti kljuc




CREATE KEYSPACE zakazivanje_voznje WITH REPLICATION = {'class': 'SimpleStrategy' , 'replication_factor' : 3};

USE zakazivanje_voznje

CREATE TABLE voznja(id uuid, email text, od text, do text, vozac_ime text, vozac_prezime text, vozac_kompanija text, cena text, broj_telefona text, vozac_id uuid, PRIMARY KEY(id));





INSERT INTO voznja(id,email,od,do,vozac_ime,vozac_prezime,vozac_kompanija,cena,broj_telefona, vozac_id) VALUES (now(),'david@elfak.rs','7.juli','Bulevar Nemanjica','random','randomPrezime','Bros taksi','300','060666161', '15a183f0-8742-11eb-a69e-4bf9b114ec66');
INSERT INTO voznja(id,email,od,do,vozac_ime,vozac_prezime,vozac_kompanija,cena,broj_telefona, vozac_id) VALUES (now(),'igor@elfak.rs','8.juli','Bulevar Nemanjica','random','randomPrezime','Pink taksi','350','060666161', '15a183f0-8742-11eb-a69e-4bf9b114ec66');
INSERT INTO voznja(id,email,od,do,vozac_ime,vozac_prezime,vozac_kompanija,cena,broj_telefona, vozac_id) VALUES (now(),'tijana@elfak.rs','9.juli','Bulevar Nemanjica','random','randomPrezime','Bros taksi','360','060666161', '15a183f0-8742-11eb-a69e-4bf9b114ec66');
INSERT INTO voznja(id,email,od,do,vozac_ime,vozac_prezime,vozac_kompanija,cena,broj_telefona, vozac_id) VALUES (now(),'bojana@elfak.rs','10.juli','Bulevar Nemanjica','random','randomPrezime','Eko taksi','360','060666161', '15a183f0-8742-11eb-a69e-4bf9b114ec66');


## Kako pokrenuti aplikaciju?

Za pokretanje nase aplikacije u root folder se izvrsava komanda npm install 
cd frontend npm install
\root  npm run dev [pokretanje i serverske i frontend strane]

