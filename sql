CREATE TABLE task (
    id_task SERIAL PRIMARY KEY,
    nome VARCHAR,
    descricao VARCHAR,
    ativa BOOLEAN,
    id_category INTEGER
);

CREATE TABLE category (
    id_category SERIAL PRIMARY KEY,
    nome VARCHAR
);

ALTER TABLE task
ADD CONSTRAINT fk_task_category
FOREIGN KEY (id_category)
REFERENCES category(id_category);
