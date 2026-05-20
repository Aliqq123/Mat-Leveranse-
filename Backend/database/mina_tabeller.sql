--
-- PostgreSQL database dump
--

\restrict JA7BerFdHonJfsYoPf9tS1KhfLc5JnRz3qc8pV7ID68iex5Z0fHxGBaYZZU6VzH

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2026-05-20 07:02:12

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
-- TOC entry 226 (class 1259 OID 24919)
-- Name: admin_products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin_products (
    product_id integer NOT NULL,
    product_name character varying(255) NOT NULL,
    product_origin character varying(255),
    product_type character varying(100),
    product_price numeric(10,2),
    product_image text,
    product_description text
);


ALTER TABLE public.admin_products OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 24918)
-- Name: admin_products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_products_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_products_product_id_seq OWNER TO postgres;

--
-- TOC entry 5047 (class 0 OID 0)
-- Dependencies: 225
-- Name: admin_products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_products_product_id_seq OWNED BY public.admin_products.product_id;


--
-- TOC entry 219 (class 1259 OID 24883)
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
-- TOC entry 220 (class 1259 OID 24887)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    order_id integer NOT NULL,
    order_number integer,
    product_id integer
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 24892)
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
-- TOC entry 221 (class 1259 OID 24891)
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
-- TOC entry 5048 (class 0 OID 0)
-- Dependencies: 221
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;


--
-- TOC entry 223 (class 1259 OID 24904)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    email character varying(100),
    password character varying(100),
    phone character varying(15)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 24909)
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
-- TOC entry 5049 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4876 (class 2604 OID 24922)
-- Name: admin_products product_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_products ALTER COLUMN product_id SET DEFAULT nextval('public.admin_products_product_id_seq'::regclass);


--
-- TOC entry 4874 (class 2604 OID 24910)
-- Name: products product_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);


--
-- TOC entry 4875 (class 2604 OID 24911)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 5041 (class 0 OID 24919)
-- Dependencies: 226
-- Data for Name: admin_products; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 5034 (class 0 OID 24883)
-- Dependencies: 219
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 5035 (class 0 OID 24887)
-- Dependencies: 220
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 5037 (class 0 OID 24892)
-- Dependencies: 222
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products (product_id, product_name, product_description, product_image, product_price, product_origin, product_type) VALUES (1, 'Kebab Rulle', 'En klassisk svensk kebabrulle med tunnbröd, kebabkött, färska grönsaker och kebabsås.', '/Images/kebabrulle.jpg', 99.50, NULL, NULL);


--
-- TOC entry 5038 (class 0 OID 24904)
-- Dependencies: 223
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, username, email, password, phone) VALUES (1, 'samira', 'duck24@gmail.com', '$2b$10$k8hXwngEt.UTldqe3RtA0uCtJNlueCwPuMaDdSE3mop4EHND7hxYS', '0701010');
INSERT INTO public.users (id, username, email, password, phone) VALUES (2, 'anders', 'anders.andersson@gmail.com', '$2b$10$AZP5Jv/yYuNsI2ERkcQOneHTZyTSJ3tv/0/7sN4qZOGHjaDQyfUYu', '0734914033');
INSERT INTO public.users (id, username, email, password, phone) VALUES (3, 'diogo', 'diomango12@gmail.com', '$2b$10$XfWG.pD.bgcJxHdmSJ8KY.UBALN/E7iLjTFyyrN4Ck2GxX7Zt8rUO', '0718921839');
INSERT INTO public.users (id, username, email, password, phone) VALUES (4, 'chepelo', 'chepe233@gmail.com', '$2b$10$9kJoPU4CXc2gaO5E5hhksOKy1Sd5sNKeszXZvDwYEkDx9p5XTqS5.', '0700128892');


--
-- TOC entry 5050 (class 0 OID 0)
-- Dependencies: 225
-- Name: admin_products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_products_product_id_seq', 1, false);


--
-- TOC entry 5051 (class 0 OID 0)
-- Dependencies: 221
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_id_seq', 1, true);


--
-- TOC entry 5052 (class 0 OID 0)
-- Dependencies: 224
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- TOC entry 4886 (class 2606 OID 24928)
-- Name: admin_products admin_products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_products
    ADD CONSTRAINT admin_products_pkey PRIMARY KEY (product_id);


--
-- TOC entry 4878 (class 2606 OID 24913)
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customer_id);


--
-- TOC entry 4880 (class 2606 OID 24915)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- TOC entry 4882 (class 2606 OID 24903)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- TOC entry 4884 (class 2606 OID 24917)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


-- Completed on 2026-05-20 07:02:12

--
-- PostgreSQL database dump complete
--

\unrestrict JA7BerFdHonJfsYoPf9tS1KhfLc5JnRz3qc8pV7ID68iex5Z0fHxGBaYZZU6VzH

