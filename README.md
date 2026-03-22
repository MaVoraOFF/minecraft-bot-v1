<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Установка Minecraft бота</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2c3e50;
            text-align: center;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        .step {
            background-color: #ecf0f1;
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            border-left: 4px solid #3498db;
        }
        .def {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
        }
        .cust {
            background-color: #d1ecf1;
            border-left: 4px solid #17a2b8;
        }
        code {
            background-color: #f8f9fa;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: monospace;
        }
        .divider {
            height: 2px;
            background-color: #3498db;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Установка Minecraft бота</h1>
        
        <div class="step">
            <h3>Шаг 1</h3>
            <p>Скачайте Node.js 22</p>
            <p>Распакуйте файлы на рабочий стол</p>
        </div>

        <div class="step def">
            <h3>#Def Настройки по умолчанию</h3>
            <p>Откройте Minecraft 1.21.4</p>
            <p>Локальный порт: <code>25567</code></p>
        </div>

        <div class="divider"></div>

        <div class="step cust">
            <h3>#Cust Персонализация</h3>
            <p>Откройте файл <code>bot.js</code> в текстовом редакторе</p>
            <p>Измените версию с 1.21.4 на вашу версию (Минимум: 1.20.4, Максимум: 1.21.11)</p>
            <p>Измените порт <code>25567</code> на ваш порт</p>
        </div>

        <div class="step">
            <h3>Шаг 2</h3>
            <p>Откройте PowerShell от имени администратора</p>
            <p>Выполните команды:</p>
            <code>cd "C:\Users\&lt;Your User&gt;\Desktop\minecraft-bot v1"</code><br>
            <code>npm i</code><br>
            <code>npm start</code>
        </div>

        <div class="step" style="background-color: #d4edda; border-left: 4px solid #28a745;">
            <h3 style="color: #155724;">Готово к игре!</h3>
            <p>Бот успешно установлен и готов к использованию</p>
        </div>
    </div>
</body>
</html>
