#import numpy as np
from apps.vacantes.models import Vacant,RequiredAbility,RequiredLanguage
from apps.students.models import Student,StudentSkill,StudentLanguage
from apps.recommendations.algorithms.functions import calculate_experience,calculate_salary,calculate_languages,calculate_optional_skills,calculate_mandatory_skills

def get_vacants():
    vacants_ids = Vacant.objects.filter(c204_id_vacant_status=2).values('t200_id_vacant')
    return vacants_ids

def get_vacant_mandatory_skills(id_vacant):
    mandatory_skills = []
    mandatory=RequiredAbility.objects.filter(t200_id_vacant=id_vacant,t211_mandatory=True).values('c116_description').all()
    for skill in mandatory:        
        mandatory_skills.append(skill['c116_description'])        
    print("Obligatorias:",mandatory_skills)
    return mandatory_skills

def get_vacant_optional_skills(id_vacant):    
    optional_skills = []
    optional=RequiredAbility.objects.filter(t200_id_vacant=id_vacant,t211_mandatory=False).values('c116_description').all()
    for skill in optional:
        optional_skills.append(skill['c116_description'])
    print("Opcionales:",optional_skills)        
    return optional_skills

def get_vacant_languages(id_vacant):
    languages = []
    vacant_languages = RequiredLanguage.objects.filter(t200_id_vacant=id_vacant).all()
    for language in vacant_languages:        
        languages.append(language.c111_id_language.c111_description)
    return languages

def get_vacant_required_experience(vacant_id):
    vacant_data = Vacant.objects.filter(t200_id_vacant=vacant_id).values('c207_id_experience').first()
    #print("Experiencia",vacant_data['c207_id_experience'])
    return vacant_data['c207_id_experience']

def get_candidate_info(id_candidate):
    data = []#StudentSkill
    candidate_skills = StudentSkill.objects.filter(t100_id_student=id_candidate).all()
    candidate_languages = StudentLanguage.objects.filter(t100_id_student=id_candidate).all()
    for skill in candidate_skills:
        print(skill)
    for language in calculate_languages:
        print(language)
    return

def candidate_recomendation(id_candidate):

    vacants = []
    print("Obteniendo vacantes activas.....")
    vacants_ids = get_vacants()
    for id in vacants_ids:
        vacant_data = []
        vacant_data.append(id['t200_id_vacant'])
        vacant_data.append(get_vacant_mandatory_skills(id['t200_id_vacant']))
        vacant_data.append(get_vacant_optional_skills(id['t200_id_vacant']))
        vacant_data.append(get_vacant_languages(id['t200_id_vacant']))
        vacant_data.append(get_vacant_required_experience(id['t200_id_vacant']))
        print(vacant_data)
        vacants.append(vacant_data)
    print(vacants)


