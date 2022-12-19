#import numpy as np
from apps.vacantes.models import Vacant,RequiredAbility,RequiredLanguage
from apps.students.models import Student,StudentSkill,StudentLanguage
from apps.recommendations.models import Recommendation
from apps.recommendations.api.serializers.recommendations_serializer import RecommendationSerializer
from apps.recommendations.algorithms.functions import calculate_experience,calculate_salary,calculate_languages,calculate_optional_skills,calculate_mandatory_skills,calculate_total_percentage

recommendation_prototype = {
    't100_id_student' : '',
    't200_id_vacant' : '',
    't500_percentage' : ''
}

def get_vacants():
    vacants_ids = Vacant.objects.filter(c204_id_vacant_status=2).values('t200_id_vacant')
    return vacants_ids

def get_vacant_mandatory_skills(id_vacant):
    mandatory_skills = []
    mandatory=RequiredAbility.objects.filter(t200_id_vacant=id_vacant,t211_mandatory=True).values('c116_description').all()
    for skill in mandatory:        
        mandatory_skills.append(skill['c116_description'].lower())        
    print("Obligatorias:",mandatory_skills)
    return mandatory_skills

def get_vacant_optional_skills(id_vacant):    
    optional_skills = []
    optional=RequiredAbility.objects.filter(t200_id_vacant=id_vacant,t211_mandatory=False).values('c116_description').all()
    for skill in optional:
        optional_skills.append(skill['c116_description'].lower())
    print("Opcionales:",optional_skills)        
    return optional_skills

def get_vacant_languages(id_vacant):
    languages = []
    vacant_languages = RequiredLanguage.objects.filter(t200_id_vacant=id_vacant).all()
    for language in vacant_languages:        
        languages.append(language.c111_id_language.c111_description.lower())
    return languages

def get_vacant_required_experience(vacant_id):
    vacant_data = Vacant.objects.filter(t200_id_vacant=vacant_id).values('c207_id_experience').first()
    #print("Experiencia",vacant_data['c207_id_experience'])
    return vacant_data['c207_id_experience']

def get_vacant_salary_range(vacant_id):
    salary = []
    vacant_data = Vacant.objects.filter(t200_id_vacant=vacant_id).values('t200_min_salary','t200_max_salary').first()
    salary.append(vacant_data['t200_min_salary'])
    salary.append(vacant_data['t200_max_salary'])
    return salary

def get_candidate_info(id_candidate):
    candidate_data = []#StudentSkill
    skills = []
    languages = []
    candidate_skills = StudentSkill.objects.filter(t100_id_student=id_candidate).all()
    candidate_languages = StudentLanguage.objects.filter(t100_id_student=id_candidate).all()
    candidate = Student.objects.filter(t100_id_student=id_candidate).values('t100_target_salary','c207_id_experience').first()
    for skill in candidate_skills:        
        skills.append(skill.c116_id_skill.c116_description.lower())
    for language in candidate_languages:
        languages.append(language.c111_id_language.c111_description.lower())    
    candidate_data.append(id_candidate)
    candidate_data.append(skills)
    candidate_data.append(languages)
    candidate_data.append(candidate['t100_target_salary'])
    candidate_data.append(candidate['c207_id_experience'])
    return candidate_data

def candidate_recomendation(id_candidate):
    weight = [1,0.5,0.1,1,0.5]
    vacants = []
    similarity_vectors = []
    candidate_vector = []
    check_recommendations = Recommendation.objects.filter(t100_id_student=id_candidate).all()
    if len(check_recommendations) > 0:
        return
    print("Obteniendo vacantes activas.....")
    vacants_ids = get_vacants()
    for id in vacants_ids:
        vacant_data = []
        vacant_data.append(id['t200_id_vacant'])
        vacant_data.append(get_vacant_mandatory_skills(id['t200_id_vacant']))
        vacant_data.append(get_vacant_optional_skills(id['t200_id_vacant']))
        vacant_data.append(get_vacant_languages(id['t200_id_vacant']))
        vacant_data.append(get_vacant_salary_range(id['t200_id_vacant']))
        vacant_data.append(get_vacant_required_experience(id['t200_id_vacant']))
        print(vacant_data)
        vacants.append(vacant_data)
    print(vacants)
    candidate_vector = get_candidate_info(id_candidate)
    print(candidate_vector)
    for vacant in vacants:
        similarity_vector = []
        similarity_vector.append(calculate_mandatory_skills(candidate_vector[1],vacant[1]))
        similarity_vector.append(calculate_optional_skills(candidate_vector[1],vacant[2]))
        similarity_vector.append(calculate_languages(candidate_vector[2],vacant[3]))
        similarity_vector.append(calculate_salary(candidate_vector[3],vacant[4][0],vacant[4][1]))
        similarity_vector.append(calculate_experience(candidate_vector[4],vacant[5]))#Experiencia 
        porcentage = calculate_total_percentage(similarity_vector,weight)
        if porcentage >60:
            print("Porcentaje de recomendación:")
            print(porcentage)
            recomendation_data = recommendation_prototype
            recomendation_data['t100_id_student'] = id_candidate
            recomendation_data['t200_id_vacant'] = vacant[0]
            recomendation_data['t500_percentage'] = int(porcentage)
            print(recomendation_data)
            recommendation_serializer = RecommendationSerializer(data = recomendation_data)
            if recommendation_serializer.is_valid():
                recommendation_serializer.save()


        





#####Se debe borrar y crear el vector de recomendaciones cada que se acceda/solicite las recomendaciones
#Se obtienen las vacantes abiertas y su información
#Se obtiene la información del candidato
    #Si el candidato tiene nulo algun rubro necesario para la recomendación, se cancelará el analisis porque el candidato habla puras basuras
#Se compara cada vacante contra el candidato para obtener el vector de similitud
    #Si una vacante tiene nulo algun rubro necesario para la recomendación, se saltara el analisis de dicha vacante
#Se multiplican los vectores de similitudes por el vector de pesos de los rubros (cada peso representa cual seria el porcentaje ideal para aplicar a la vacante)
#Se obtiene el porcentaje total de vacante-candidato
#Solo las vacantes con mas de 60% de similitud se agregan a la matriz de recommendations
#Se deben de obtener las vacantes activas a las cuales se postulo el candidato
#Con base a las vacantes donde se postulo se deben de obtener las vacantes similares a las que se postulo
#Se deben agregar las vacantes similares al vector de recomendaciones, solo las que cumplan mas del 85% de similitud

