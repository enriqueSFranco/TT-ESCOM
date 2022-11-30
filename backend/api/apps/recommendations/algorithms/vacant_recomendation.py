#import numpy as np
from apps.vacantes.models import Vacant
from apps.students.models import Student
from apps.recommendations.algorithms.functions import calculate_experience,calculate_salary,calculate_languages,calculate_optional_skills,calculate_mandatory_skills

def get_vacants():
    vacants_ids = Vacant.objects.filter(c204_id_vacant_status=2).values('t200_id_vacant')
    return vacants_ids

def candidate_recomendation():
    print("Hola candidato-><-")
    print(get_vacants())