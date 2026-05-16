--
-- PostgreSQL database dump
--

\restrict IfHEGw0LEPzUWbWbr8pLFzRGKIacJhTBKN69248B6A67EXKJkGduDmq22ZKXn44

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2026-05-16 22:29:50

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 24838)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    product_id integer NOT NULL,
    product_name character varying(255) NOT NULL,
    product_description text,
    product_image text,
    product_price numeric(10,2) NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 24837)
-- Name: products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_product_id_seq OWNER TO postgres;

--
-- TOC entry 5022 (class 0 OID 0)
-- Dependencies: 223
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;


--
-- TOC entry 4865 (class 2604 OID 24841)
-- Name: products product_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);


--
-- TOC entry 5016 (class 0 OID 24838)
-- Dependencies: 224
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price) VALUES (1, 'Kebabrulle', 'En klassisk svensk kebabrulle med tunnbröd, kebabkött, färska grönsaker och kebabsås.', '/Images/kebabrulle.jpg', 99.50);
INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price) VALUES (2, 'Pepperonipizza', 'En populär pepperonipizza med pepperonis, champinjoner, oliver och jalapeños.', '/Images/pizza.jpg', 100.50);
INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price) VALUES (3, 'Cheeseburgare', 'En vanlig cheeseburgare med hamburgerbröd, köttbiff och ost.', '/Images/burger.jpg', 99.50);
INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price) VALUES (4, 'Shrimp alfredo pasta', 'En känd pasta alfredo med pasta, räkor och alfredosås.', '/Images/shrimp.jpg', 195.50);
INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price) VALUES (5, 'Fish and chips', 'En klassisk fish and chips med friterad fiskfilé, pommes frites och tartarsås.', '/Images/fish.jpg', 100.50);


--
-- TOC entry 5023 (class 0 OID 0)
-- Dependencies: 223
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_id_seq', 1, true);


--
-- TOC entry 4867 (class 2606 OID 24848)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


-- Completed on 2026-05-16 22:29:50

--
-- PostgreSQL database dump complete
--

\unrestrict IfHEGw0LEPzUWbWbr8pLFzRGKIacJhTBKN69248B6A67EXKJkGduDmq22ZKXn44

