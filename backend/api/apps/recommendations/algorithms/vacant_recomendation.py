#import numpy as np
from apps.vacantes.models import Vacant
from apps.students.models import Student
from apps.recommendations.algorithms.functions import calculate_experience,calculate_salary,calculate_languages,calculate_optional_skills,calculate_mandatory_skills

def get_vacants():
    vacants_ids = Vacant.objects.filter(c204_id_vacant_status=2).values('t200_id_vacant')
    return vacants_ids

def get_vacant_skills():
    return

def get_vacant_languages():
    return

def get_vacant_info():
    return

def candidate_recomendation():
    print("Obteniendo vacantes activas.....")
    vacants_ids = get_vacants()
    for id in vacants_ids:
        print(id)

