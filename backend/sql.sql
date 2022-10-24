drop table if exists "user";

CREATE TABLE data(
id_user varchar(30) PRIMARY_KEY NOT NULL,
username varchar(70),
email varchar(90),
active boolean
);

INSERT INTO  data(
id_user varchar(30) PRIMARY_KEY ,
username varchar(70),
email varchar(90),
active boolean
);
