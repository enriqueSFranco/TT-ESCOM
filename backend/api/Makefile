run:
<<<<<<< HEAD
<<<<<<< HEAD
	python3 manage.py runserver

restore: migrate
	python3 manage.py loaddata data.json
	python3 manage.py runserver
=======
=======
>>>>>>> e8e8da7891e82345f92bf379417b448928a449cb
	python3.10 manage.py makemigrations
	python3.10 manage.py migrate
	python3.10 manage.py runserver

restore: migrate	
	python3.10 manage.py runserver
<<<<<<< HEAD
>>>>>>> 4ed22ceff0db225ccf4cbeea37ddefe4abc7b5d6
=======
>>>>>>> e8e8da7891e82345f92bf379417b448928a449cb

data:
	python3.10 manage.py loaddata data.json
	python3.10 manage.py loaddata cp.json 
	python3.10 manage.py loaddata academic_units.json

clean:	
	rm -rf apps/*/migrations/*

restore_inits: clean
	touch apps/administration/migrations/__init__.py
	touch apps/companies/migrations/__init__.py
	touch apps/students/migrations/__init__.py
	touch apps/users/migrations/__init__.py
	touch apps/vacantes/migrations/__init__.py

makemigrations: restore_inits
	python3.10 manage.py makemigrations

migrate: makemigrations
<<<<<<< HEAD
<<<<<<< HEAD
	python3 manage.py migrate	
=======
	python3.10 manage.py migrate
>>>>>>> 4ed22ceff0db225ccf4cbeea37ddefe4abc7b5d6
=======
	python3.10 manage.py migrate	
>>>>>>> e8e8da7891e82345f92bf379417b448928a449cb

superuser:
	python3.10 manage.py createsuperuser
	
