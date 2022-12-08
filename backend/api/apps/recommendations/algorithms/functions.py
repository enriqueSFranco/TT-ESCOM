def calculate_mandatory_skills(candidate_skills,mandatory):
    mandatory_porcentage = 0
    mandatory_skills = 0
    if len(mandatory) == 0:
        return mandatory_porcentage
    for skill in mandatory:
        if skill in candidate_skills:
            mandatory_skills = mandatory_skills + 1
    mandatory_porcentage = (mandatory_skills*100)/len(mandatory)       
    return mandatory_porcentage

def calculate_optional_skills(candidate_skills,optional):
    optional_porcentage = 0
    optional_skills = 0
    if len(optional) == 0:
        return optional_porcentage
    for skill in optional:
        if skill in candidate_skills:
            optional_skills = optional_skills + 1
    optional_porcentage = (optional_skills*100)/len(optional)       
    return optional_porcentage

def calculate_total_percentage(vacant,wheights):        
    sum = (vacant[0]*wheights[0]) + (vacant[1]*wheights[1]) + (vacant[2]*wheights[2]) + (vacant[3]*wheights[3]) + (vacant[4]*wheights[4])
    total_max_percentage = wheights[0]+wheights[1]+wheights[2]+wheights[3]+wheights[4]
    print(total_max_percentage)
    percentage = sum*100/310
    print(percentage)
    return percentage


def calculate_languages(candidate_languages,vacant_languages):
    languages_count = 0
    porcentage = 0
    for language in vacant_languages:        
        if language in candidate_languages:
            languages_count = languages_count + 1
    porcentage = (languages_count*100)/len(vacant_languages)
    return porcentage

def calculate_salary(salary_objetive,min_salary,max_salary):
    porcentage = 0
    if min_salary < salary_objetive and salary_objetive < max_salary:
        porcentage = 100
        return porcentage
    if min_salary > salary_objetive:
        porcentage = (min_salary*100)/salary_objetive
        return porcentage
    if salary_objetive > max_salary:
        porcentage = (max_salary*100)/salary_objetive
        return porcentage
    return porcentage

def calculate_experience(candidate_exp,required_exp):
    porcentage = 0
    if required_exp <= candidate_exp:
        porcentage = 100 
        return porcentage
    else:
        section = 100/required_exp
        porcentage = section * candidate_exp
        return porcentage
    return porcentage
