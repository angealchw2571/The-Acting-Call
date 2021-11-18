# Generated by Django 3.2.9 on 2021-11-17 06:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Castcall',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=50)),
                ('platform', models.CharField(max_length=30)),
                ('period', models.IntegerField(default=0)),
                ('role', models.CharField(max_length=50)),
                ('details', models.CharField(max_length=200)),
                ('contact', models.CharField(max_length=20)),
                ('location', models.CharField(max_length=200)),
                ('company', models.CharField(max_length=50)),
                ('remuneration', models.IntegerField(default=0)),
                ('loadingScale', models.CharField(max_length=50)),
                ('contract', models.BooleanField(default=False)),
                ('postedBy', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='casts', to='profiles.profiles')),
            ],
        ),
    ]
