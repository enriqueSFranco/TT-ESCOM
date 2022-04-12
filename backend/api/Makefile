run: migrate
	python3.10 manage.py loaddata data.json
	python3.10 manage.py runserver

clean:	
	rm -rf apps/*/migrations/*

restore: clean
	touch apps/administration/migrations/__init__.py
	touch apps/companies/migrations/__init__.py
	touch apps/students/migrations/__init__.py
	touch apps/users/migrations/__init__.py
	touch apps/vacantes/migrations/__init__.py

makemigrations: restore
	python3.10 manage.py makemigrations

migrate: makemigrations
	python3.10 manage.py migrate	