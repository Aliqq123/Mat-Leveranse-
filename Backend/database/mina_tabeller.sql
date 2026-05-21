--
-- PostgreSQL database dump
--

\restrict ddW989oHBPWSk9PDZ8QFbWNqIdNBhetenETgXgEwtijqBFFLtk75QuGqiHRhix4

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2026-05-21 03:30:36

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
-- TOC entry 219 (class 1259 OID 25001)
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    customer_id integer NOT NULL,
    customer_firstname character varying(100),
    customer_lasname character varying(100),
    customer_epost character varying(100)
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 25005)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    order_id integer NOT NULL,
    order_number integer,
    product_id integer
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 25009)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    product_id integer NOT NULL,
    product_name character varying(255) NOT NULL,
    product_description text,
    product_image text,
    product_price numeric(10,2) NOT NULL,
    product_origin character varying(255),
    product_type character varying(100)
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 25017)
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
-- TOC entry 5038 (class 0 OID 0)
-- Dependencies: 222
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;


--
-- TOC entry 223 (class 1259 OID 25018)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    email character varying(100),
    password character varying(100),
    phone character varying(15),
    role character varying(20) DEFAULT 'user'::character varying,
    profile_image text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 25023)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 5039 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4869 (class 2604 OID 25025)
-- Name: products product_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);


--
-- TOC entry 4870 (class 2604 OID 25026)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 5027 (class 0 OID 25001)
-- Dependencies: 219
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 5028 (class 0 OID 25005)
-- Dependencies: 220
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 5029 (class 0 OID 25009)
-- Dependencies: 221
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price, product_origin, product_type) VALUES (1, 'Kebab Rulle', 'En klassisk svensk kebabrulle med tunnbröd, kebabkött, färska grönsaker och kebabsås.', '/Images/kebabrulle.jpg', 99.50, 'Amons Kebab', 'Nöttkött');
INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price, product_origin, product_type) VALUES (2, 'Tacos', 'Traditionella mexikanska tacos med nötkött och salsa', '/Images/tacos.jpg', 85.00, 'Wing Wongs Ricefarm', 'Nötkött');
INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price, product_origin, product_type) VALUES (3, 'Kycklingrulle', 'Saftig kycklingrulle med grönsaker och sås', '/Images/chickenrulle.jpg', 90.00, 'Amons kebab', 'Kyckling');
INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price, product_origin, product_type) VALUES (4, 'Lax', 'Grillad lax med citron och örter', '/Images/lax.jpg', 150.00, 'KFC', 'Fisk');
INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price, product_origin, product_type) VALUES (5, 'Vegoburgare', 'Växtbaserad burgare med sallad och dressing', '/Images/vegoBurger.jpg', 86.00, 'Wing Wongs Ricefarm', 'Vegetariskt');
INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price, product_origin, product_type) VALUES (6, 'Baklava', 'Söt baklava med nötter och honung', '/Images/baklava.jpg', 35.00, 'Bogdans Pizzaria', 'Dessert');
INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price, product_origin, product_type) VALUES (7, 'Churrus', 'med nutella, med glass', '/uploads/1779286849071-churros.jpg', 22.00, 'Jafaris Donuts', 'dessert');


--
-- TOC entry 5031 (class 0 OID 25018)
-- Dependencies: 223
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, username, email, password, phone, role) VALUES (2, 'anders', 'anders.andersson@gmail.com', '$2b$10$AZP5Jv/yYuNsI2ERkcQOneHTZyTSJ3tv/0/7sN4qZOGHjaDQyfUYu', '0734914033', 'user');
INSERT INTO public.users (id, username, email, password, phone, role) VALUES (3, 'diogo', 'diomango12@gmail.com', '$2b$10$XfWG.pD.bgcJxHdmSJ8KY.UBALN/E7iLjTFyyrN4Ck2GxX7Zt8rUO', '0718921839', 'user');
INSERT INTO public.users (id, username, email, password, phone, role) VALUES (4, 'chepelo', 'chepe233@gmail.com', '$2b$10$9kJoPU4CXc2gaO5E5hhksOKy1Sd5sNKeszXZvDwYEkDx9p5XTqS5.', '0700128892', 'user');
INSERT INTO public.users (id, username, email, password, phone, role) VALUES (5, 'uffetuffe', 'hej@hå.se', '$2b$10$29SyVuhulDMzX5.8rC7kR.J29Z0yGdWb.HHTVBxJ3Tyz5xiH2CZtO', '0739555468', 'user');
INSERT INTO public.users (id, username, email, password, phone, role) VALUES (1, 'samira', 'duck24@gmail.com', '$2b$10$k8hXwngEt.UTldqe3RtA0uCtJNlueCwPuMaDdSE3mop4EHND7hxYS', '0701010', 'admin');
INSERT INTO public.users (id, username, email, password, phone, role) VALUES (6, 'babalo', 'baba0101@gmail.com', '$2b$10$uaDbCZ2gbO1b2BtQW6Sv5.7yNFagixcdGxwjlEb/UwOCXqXIHeYQu', '0700129626', 'user');
INSERT INTO public.users (id, username, email, password, phone, role) VALUES (7, 'Arsalan', 'arsalanesk69@gmail.com', '$2b$10$jiFhcNK1R003PCUgNrdDXe0ChTyO5LiJmuKbH90kRty2FID5fxTa.', '0734914033', 'user');


--
-- TOC entry 5040 (class 0 OID 0)
-- Dependencies: 222
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_id_seq', 7, true);


--
-- TOC entry 5041 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- TOC entry 4873 (class 2606 OID 25030)
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customer_id);


--
-- TOC entry 4875 (class 2606 OID 25032)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- TOC entry 4877 (class 2606 OID 25034)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- TOC entry 4879 (class 2606 OID 25036)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


-- Completed on 2026-05-21 03:30:37

--
-- PostgreSQL database dump complete
--

\unrestrict ddW989oHBPWSk9PDZ8QFbWNqIdNBhetenETgXgEwtijqBFFLtk75QuGqiHRhix4

