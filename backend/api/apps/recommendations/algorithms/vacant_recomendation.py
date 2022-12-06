#import numpy as np
from apps.vacantes.models import Vacant,RequiredAbility,RequiredLanguage
from apps.students.models import Student
from apps.recommendations.algorithms.functions import calculate_experience,calculate_salary,calculate_languages,calculate_optional_skills,calculate_mandatory_skills

def get_vacants():
    vacants_ids = Vacant.objects.filter(c204_id_vacant_status=2).values('t200_id_vacant')
    return vacants_ids

def get_vacant_skills(id_vacant):
    skills = []
    mandatory=RequiredAbility.objects.filter(t200_id_vacant=id_vacant,t211_mandatory=True).values('c116_description').all()
    print(mandatory)
    skills.append[mandatory]
    optional=RequiredAbility.objects.filter(t200_id_vacant=id_vacant,t211_mandatory=False).values('c116_description').all()
    print(optional)
    skills.append[optional]
    return skills

def get_vacant_languages(id_vacant):
    return

def get_vacant_info(vacant_id):

    return

def candidate_recomendation():
    print("Obteniendo vacantes activas.....")
    vacants_ids = get_vacants()
    for id in vacants_ids:
        print(id['t200_id_vacant'])
        print(get_vacant_skills(id['t200_id_vacant']))

