PGDMP     &    %        
        {            tarea2bd    15.2    15.2 C    P           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            Q           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            R           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            S           1262    16586    tarea2bd    DATABASE     {   CREATE DATABASE tarea2bd WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Chile.1252';
    DROP DATABASE tarea2bd;
                postgres    false                        2615    16627    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            T           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                   postgres    false    5            U           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                   postgres    false    5            �            1259    24971    _defensasToreinos    TABLE     `   CREATE TABLE public."_defensasToreinos" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);
 '   DROP TABLE public."_defensasToreinos";
       public         heap    postgres    false    5            �            1259    16628    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false    5            �            1259    24964    defensas    TABLE     f   CREATE TABLE public.defensas (
    id integer NOT NULL,
    defensa character varying(45) NOT NULL
);
    DROP TABLE public.defensas;
       public         heap    postgres    false    5            �            1259    25525    defensas_id_seq    SEQUENCE     x   CREATE SEQUENCE public.defensas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.defensas_id_seq;
       public          postgres    false    5    222            V           0    0    defensas_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.defensas_id_seq OWNED BY public.defensas.id;
          public          postgres    false    224            �            1259    24959    diplomacias    TABLE     �   CREATE TABLE public.diplomacias (
    reinos1 integer NOT NULL,
    reinos2 integer NOT NULL,
    es_aliado boolean NOT NULL
);
    DROP TABLE public.diplomacias;
       public         heap    postgres    false    5            �            1259    24928    karts    TABLE     �   CREATE TABLE public.karts (
    id integer NOT NULL,
    modelo character varying(45) NOT NULL,
    color character varying(45) NOT NULL,
    velocidad_maxima integer,
    "personajesId" integer
);
    DROP TABLE public.karts;
       public         heap    postgres    false    5            �            1259    25527    karts_id_seq    SEQUENCE     u   CREATE SEQUENCE public.karts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.karts_id_seq;
       public          postgres    false    216    5            W           0    0    karts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.karts_id_seq OWNED BY public.karts.id;
          public          postgres    false    225            �            1259    24942    personaje_tiene_trabajo    TABLE     �   CREATE TABLE public.personaje_tiene_trabajo (
    "personajesId" integer NOT NULL,
    "trabajosId" integer NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_termino date NOT NULL
);
 +   DROP TABLE public.personaje_tiene_trabajo;
       public         heap    postgres    false    5            �            1259    24921 
   personajes    TABLE     �   CREATE TABLE public.personajes (
    id integer NOT NULL,
    nombre character varying(45) NOT NULL,
    fuerza integer NOT NULL,
    fecha_nacimiento date NOT NULL,
    objeto character varying(30)
);
    DROP TABLE public.personajes;
       public         heap    postgres    false    5            �            1259    25529    personajes_id_seq    SEQUENCE     z   CREATE SEQUENCE public.personajes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.personajes_id_seq;
       public          postgres    false    5    215            X           0    0    personajes_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.personajes_id_seq OWNED BY public.personajes.id;
          public          postgres    false    226            �            1259    24954    pesonaje_habita_reino    TABLE     �   CREATE TABLE public.pesonaje_habita_reino (
    "personajesId" integer NOT NULL,
    "reinosId" integer NOT NULL,
    fecha_registro timestamp(3) without time zone NOT NULL,
    es_gobernate boolean NOT NULL
);
 )   DROP TABLE public.pesonaje_habita_reino;
       public         heap    postgres    false    5            �            1259    24947    reinos    TABLE     �   CREATE TABLE public.reinos (
    id integer NOT NULL,
    nombre character varying(45) NOT NULL,
    ubicacion character varying(45) NOT NULL,
    superficie integer NOT NULL
);
    DROP TABLE public.reinos;
       public         heap    postgres    false    5            �            1259    25531    reinos_id_seq    SEQUENCE     v   CREATE SEQUENCE public.reinos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.reinos_id_seq;
       public          postgres    false    219    5            Y           0    0    reinos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.reinos_id_seq OWNED BY public.reinos.id;
          public          postgres    false    227            �            1259    24935    trabajos    TABLE     ~   CREATE TABLE public.trabajos (
    id integer NOT NULL,
    descripcion character varying(45),
    sueldo integer NOT NULL
);
    DROP TABLE public.trabajos;
       public         heap    postgres    false    5            �            1259    25533    trabajos_id_seq    SEQUENCE     x   CREATE SEQUENCE public.trabajos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.trabajos_id_seq;
       public          postgres    false    217    5            Z           0    0    trabajos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.trabajos_id_seq OWNED BY public.trabajos.id;
          public          postgres    false    228            �           2604    25526    defensas id    DEFAULT     j   ALTER TABLE ONLY public.defensas ALTER COLUMN id SET DEFAULT nextval('public.defensas_id_seq'::regclass);
 :   ALTER TABLE public.defensas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    222            �           2604    25528    karts id    DEFAULT     d   ALTER TABLE ONLY public.karts ALTER COLUMN id SET DEFAULT nextval('public.karts_id_seq'::regclass);
 7   ALTER TABLE public.karts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    216            �           2604    25530    personajes id    DEFAULT     n   ALTER TABLE ONLY public.personajes ALTER COLUMN id SET DEFAULT nextval('public.personajes_id_seq'::regclass);
 <   ALTER TABLE public.personajes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    215            �           2604    25532 	   reinos id    DEFAULT     f   ALTER TABLE ONLY public.reinos ALTER COLUMN id SET DEFAULT nextval('public.reinos_id_seq'::regclass);
 8   ALTER TABLE public.reinos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    219            �           2604    25534    trabajos id    DEFAULT     j   ALTER TABLE ONLY public.trabajos ALTER COLUMN id SET DEFAULT nextval('public.trabajos_id_seq'::regclass);
 :   ALTER TABLE public.trabajos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    217            H          0    24971    _defensasToreinos 
   TABLE DATA           7   COPY public."_defensasToreinos" ("A", "B") FROM stdin;
    public          postgres    false    223   �O       ?          0    16628    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    214   P       G          0    24964    defensas 
   TABLE DATA           /   COPY public.defensas (id, defensa) FROM stdin;
    public          postgres    false    222   cR       F          0    24959    diplomacias 
   TABLE DATA           B   COPY public.diplomacias (reinos1, reinos2, es_aliado) FROM stdin;
    public          postgres    false    221   �R       A          0    24928    karts 
   TABLE DATA           T   COPY public.karts (id, modelo, color, velocidad_maxima, "personajesId") FROM stdin;
    public          postgres    false    216   �R       C          0    24942    personaje_tiene_trabajo 
   TABLE DATA           l   COPY public.personaje_tiene_trabajo ("personajesId", "trabajosId", fecha_inicio, fecha_termino) FROM stdin;
    public          postgres    false    218   S       @          0    24921 
   personajes 
   TABLE DATA           R   COPY public.personajes (id, nombre, fuerza, fecha_nacimiento, objeto) FROM stdin;
    public          postgres    false    215   9S       E          0    24954    pesonaje_habita_reino 
   TABLE DATA           i   COPY public.pesonaje_habita_reino ("personajesId", "reinosId", fecha_registro, es_gobernate) FROM stdin;
    public          postgres    false    220   T       D          0    24947    reinos 
   TABLE DATA           C   COPY public.reinos (id, nombre, ubicacion, superficie) FROM stdin;
    public          postgres    false    219   bT       B          0    24935    trabajos 
   TABLE DATA           ;   COPY public.trabajos (id, descripcion, sueldo) FROM stdin;
    public          postgres    false    217   �T       [           0    0    defensas_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.defensas_id_seq', 8, true);
          public          postgres    false    224            \           0    0    karts_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.karts_id_seq', 6, true);
          public          postgres    false    225            ]           0    0    personajes_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.personajes_id_seq', 262, true);
          public          postgres    false    226            ^           0    0    reinos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.reinos_id_seq', 4, true);
          public          postgres    false    227            _           0    0    trabajos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.trabajos_id_seq', 2, true);
          public          postgres    false    228            �           2606    16636 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    214            �           2606    24970    defensas defensas_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.defensas
    ADD CONSTRAINT defensas_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.defensas DROP CONSTRAINT defensas_pkey;
       public            postgres    false    222            �           2606    24963    diplomacias diplomacias_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_pkey PRIMARY KEY (reinos1, reinos2);
 F   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_pkey;
       public            postgres    false    221    221            �           2606    24934    karts karts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.karts
    ADD CONSTRAINT karts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.karts DROP CONSTRAINT karts_pkey;
       public            postgres    false    216            �           2606    24946 4   personaje_tiene_trabajo personaje_tiene_trabajo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_pkey PRIMARY KEY ("personajesId", "trabajosId");
 ^   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_pkey;
       public            postgres    false    218    218            �           2606    24927    personajes personajes_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.personajes
    ADD CONSTRAINT personajes_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.personajes DROP CONSTRAINT personajes_pkey;
       public            postgres    false    215            �           2606    24958 0   pesonaje_habita_reino pesonaje_habita_reino_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.pesonaje_habita_reino
    ADD CONSTRAINT pesonaje_habita_reino_pkey PRIMARY KEY ("personajesId", "reinosId");
 Z   ALTER TABLE ONLY public.pesonaje_habita_reino DROP CONSTRAINT pesonaje_habita_reino_pkey;
       public            postgres    false    220    220            �           2606    24953    reinos reinos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.reinos
    ADD CONSTRAINT reinos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.reinos DROP CONSTRAINT reinos_pkey;
       public            postgres    false    219            �           2606    24941    trabajos trabajos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.trabajos
    ADD CONSTRAINT trabajos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.trabajos DROP CONSTRAINT trabajos_pkey;
       public            postgres    false    217            �           1259    24974    _defensasToreinos_AB_unique    INDEX     h   CREATE UNIQUE INDEX "_defensasToreinos_AB_unique" ON public."_defensasToreinos" USING btree ("A", "B");
 1   DROP INDEX public."_defensasToreinos_AB_unique";
       public            postgres    false    223    223            �           1259    24975    _defensasToreinos_B_index    INDEX     Z   CREATE INDEX "_defensasToreinos_B_index" ON public."_defensasToreinos" USING btree ("B");
 /   DROP INDEX public."_defensasToreinos_B_index";
       public            postgres    false    223            �           2606    25011 *   _defensasToreinos _defensasToreinos_A_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_defensasToreinos"
    ADD CONSTRAINT "_defensasToreinos_A_fkey" FOREIGN KEY ("A") REFERENCES public.defensas(id) ON UPDATE CASCADE ON DELETE CASCADE;
 X   ALTER TABLE ONLY public."_defensasToreinos" DROP CONSTRAINT "_defensasToreinos_A_fkey";
       public          postgres    false    223    3237    222            �           2606    25016 *   _defensasToreinos _defensasToreinos_B_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."_defensasToreinos"
    ADD CONSTRAINT "_defensasToreinos_B_fkey" FOREIGN KEY ("B") REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE CASCADE;
 X   ALTER TABLE ONLY public."_defensasToreinos" DROP CONSTRAINT "_defensasToreinos_B_fkey";
       public          postgres    false    3231    219    223            �           2606    26749 $   diplomacias diplomacias_reinos1_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_reinos1_fkey FOREIGN KEY (reinos1) REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_reinos1_fkey;
       public          postgres    false    219    3231    221            �           2606    26754 $   diplomacias diplomacias_reinos2_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_reinos2_fkey FOREIGN KEY (reinos2) REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_reinos2_fkey;
       public          postgres    false    3231    219    221            �           2606    24976    karts karts_personajesId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.karts
    ADD CONSTRAINT "karts_personajesId_fkey" FOREIGN KEY ("personajesId") REFERENCES public.personajes(id) ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public.karts DROP CONSTRAINT "karts_personajesId_fkey";
       public          postgres    false    3223    216    215            �           2606    27464 A   personaje_tiene_trabajo personaje_tiene_trabajo_personajesId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT "personaje_tiene_trabajo_personajesId_fkey" FOREIGN KEY ("personajesId") REFERENCES public.personajes(id) ON UPDATE CASCADE ON DELETE CASCADE;
 m   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT "personaje_tiene_trabajo_personajesId_fkey";
       public          postgres    false    218    215    3223            �           2606    27459 ?   personaje_tiene_trabajo personaje_tiene_trabajo_trabajosId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT "personaje_tiene_trabajo_trabajosId_fkey" FOREIGN KEY ("trabajosId") REFERENCES public.trabajos(id) ON UPDATE CASCADE ON DELETE CASCADE;
 k   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT "personaje_tiene_trabajo_trabajosId_fkey";
       public          postgres    false    217    218    3227            �           2606    27469 =   pesonaje_habita_reino pesonaje_habita_reino_personajesId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pesonaje_habita_reino
    ADD CONSTRAINT "pesonaje_habita_reino_personajesId_fkey" FOREIGN KEY ("personajesId") REFERENCES public.personajes(id) ON UPDATE CASCADE ON DELETE CASCADE;
 i   ALTER TABLE ONLY public.pesonaje_habita_reino DROP CONSTRAINT "pesonaje_habita_reino_personajesId_fkey";
       public          postgres    false    3223    220    215            �           2606    26744 9   pesonaje_habita_reino pesonaje_habita_reino_reinosId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pesonaje_habita_reino
    ADD CONSTRAINT "pesonaje_habita_reino_reinosId_fkey" FOREIGN KEY ("reinosId") REFERENCES public.reinos(id) ON UPDATE CASCADE ON DELETE CASCADE;
 e   ALTER TABLE ONLY public.pesonaje_habita_reino DROP CONSTRAINT "pesonaje_habita_reino_reinosId_fkey";
       public          postgres    false    219    3231    220            H      x�3�4����� �%      ?   E  x�m�K��7�ǧW���ޖ�"�
.4�l�A �����+ϬB_%��R|�&���cL(q�I�N�莨�F����t�bD�x��
#6#����b��h#zF����/l ���D�*�_�ɿWҘ�߿��~E�3�������� m[M֊:����ɹ8�m��7v���֪����d��#���h�ቐ�j1>)��NrǸ�@H�8":a��I?�?d~!�}��mX5��j"m���L�Α�ѩoI�!"'Z�;v��ʝ0a����^�,��3Ċ��B���w�+�;~�_��}�I�E�ό�y�rb�C��f�6�{����Q�&���D66�\���cY9N��,ME`M&f��`|��ȅd!�I�x�Y�'���/;k䝜�v��-*�I��Qm�G����o��%t��I��L6oA>7P�mv�}��9f0ãt��T���)�J~�~';ͽČ�>��ds̨���ן�����8|��S}h}�)��h�w�z�{��}Λ���v5�
�h!�s�	��W������A���.'��g��s���;<;�+<�/���C��������/W�N      G      x�3�,�ONL*�I,������� >��      F      x������ � �      A   K   x�3����I�,����44�421�2�,�)��͇	E͌�L��
��)�9�����
%�
���E%���\1z\\\ �sC      C   #   x�32��4�4204�54�54 1�LC�=... _2a      @   �   x�}�A
�0E�?���dڴ�Vť�t�����FE�Z��YE����{o�R�u��jy��:^`-HQ"��d�r磠4�̟�6��z�|��:AFa�x(xa48���s�`i(�>q�Ea��Mz�fR�(W=OG�����.�R�G�:;�2���������V��*�ZIM�|{8�� ʩ���c^      E   O   x�]˱�0�ڞ��?v�xj&`(�O�H��14��^�*��[��sv�a�r��r)�����l�� �uN      D   H   x�3�t���I�LT�ITH.J-.ITHI�Q�-�K��44�2�t,JO�+��K�L��J�*PH�2����� ��      B   4   x�3�L��S/Q�--��QH*-Q�,Q/V���K-.Q(�/��44 �=... WUY     