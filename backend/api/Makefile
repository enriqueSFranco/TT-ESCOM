run: 
	python3 manage.py makemigrations
	python3 manage.py migrate
	python3 manage.py runserver

restore: migrate
	python3 manage.py makemigrations
	python3 manage.py migrate
	python3 manage.py runserver

data:
	python3 manage.py loaddata data.json
	python3 manage.py loaddata skills.json
	python3 manage.py loaddata interestJobs.json
	python3 manage.py loaddata academic_units.json
	python3 manage.py loaddata cp.json 	

clean:	
	rm -rf apps/*/migrations/*

restore_inits: clean
	touch apps/administration/migrations/__init__.py
	touch apps/companies/migrations/__init__.py
	touch apps/students/migrations/__init__.py
	touch apps/users/migrations/__init__.py
	touch apps/vacantes/migrations/__init__.py

makemigrations: restore_inits
	python3 manage.py makemigrations

migrate: makemigrations
	python3 manage.py migrate	

superuser:
	python3 manage.py createsuperuser
	




run3: 
	python3.10 manage.py makemigrations
	python3.10 manage.py migrate
	python3.10 manage.py runserver

restore3: migrate3
	python3.10 manage.py makemigrations
	python3.10 manage.py migrate
	python3.10 manage.py runserver

data3:
	python3.10 manage.py loaddata data.json
	python3.10 manage.py loaddata skills.json
	python3.10 manage.py loaddata interestJobs.json
	python3.10 manage.py loaddata academic_units.json
	python3.10 manage.py loaddata cp.json

makemigrations3: restore_inits
	python3.10 manage.py makemigrations

migrate3: makemigrations3
	python3.10 manage.py migrate	

superuser3:
	python3.10 manage.py createsuperuser
	
