# Generated by Django 4.0.2 on 2022-03-19 19:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='studentskill',
            old_name='t102_id_skill_registrer',
            new_name='t102_id_registrer',
        ),
        migrations.AddField(
            model_name='academichistory',
            name='c107_id_academic_level',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='AcademicLevel', to='students.academiclevel'),
        ),
        migrations.AddField(
            model_name='academichistory',
            name='c109_id_academic_state',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='AcadmeicState', to='students.academicstate'),
        ),
        migrations.AlterField(
            model_name='residence',
            name='t101_state',
            field=models.CharField(blank=True, choices=[('AGUASCALIENTES', 'AGUASCALIENTES'), ('BAJA CALIFORNIA', 'BAJA CALIFORNIA'), ('BAJA CALIFORNIA SUR', 'BAJA CALIFORNIA SUR'), ('CAMPECHE', 'CAMPECHE'), ('COAHUILA', 'COAHUILA'), ('COLIMA', 'COLIMA'), ('CHIAPAS', 'CHIAPAS'), ('CHIHUAHUA', 'CHIHUAHUA'), ('CIUDAD DE MEXICO', 'CIUDAD DE MEXICO'), ('DURANGO', 'DURANGO'), ('GUANAJUATO', 'GUANAJUATO'), ('GUERRERO', 'GUERRERO'), ('HIDALGO', 'HIDALGO'), ('JALISCO', 'JALISCO'), ('MEXICO', 'MEXICO'), ('MICHOACAN', 'MICHOACAN'), ('MORELOS', 'MORELOS'), ('NAYARIT', 'NAYARIT'), ('NUEVO LEON', 'NUEVO LEON'), ('OAXACA', 'OAXACA'), ('PUEBLA', 'PUEBLA'), ('QUERETARO DE ARTEAGA', 'QUERETARO DE ARTEAGA'), ('QUINTANA ROO', 'QUINTANA ROO'), ('SAN LUIS POTOSI', 'SAN LUIS POTOSI'), ('SINALOA', 'SINALOA'), ('SONORA', 'SONORA'), ('TABASCO', 'TABASCO'), ('TAMAULIPAS', 'TAMAULIPAS'), ('TLAXCALA', 'TLAXCALA'), ('VERACRUZ', 'VERACRUZ '), ('YUCATAN', 'YUCATAN'), ('ZACATECAS', 'ZACATECAS'), ('NO ESPECIFICADA', 'NO ESPECIFICADA')], default='NO ESPECIFICADA', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='studentskill',
            name='c116_id_skill',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='SkillDescription', to='students.skills'),
        ),
    ]
