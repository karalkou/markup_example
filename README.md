**Важно** В master лежит чистый Yandex project-stub. В ветке preproc-sass - переработанная сборка (sass вместо postCSS).
Необходимо перенести шаблонные блоки из "черновика" для формирования ядра.

# Keep calm and stay BEMed!

## Требования к установке

* [Node.js 4+](https://nodejs.org) – это программная платформа, основанная на языке JavaScript и позволяющая легко создавать быстрые и масштабируемые сетевые приложения.
* [Git Bash](https://git-for-windows.github.io/) – для пользователей операционной системы Windows.

**Важно** Пользователям Windows необходимо выполнять все команды в Git Bash. Убедитесь, что Git Bash запущен от имени администратора.

## Установка

Клонируем репозиторий и устанавливаем все необходимые зависимости:
Например
```bash
git clone git@bitbucket.org:karalkou/kys-bem-assembly.git
cd my-bem-project
npm install
```
### Сборка проекта

```bash
node_modules/.bin/enb make path/to/bemjson.js
```

### Запуск сервера

```bash
node_modules/.bin/enb server
```

### Документация:
[https://ru.bem.info/](https://ru.bem.info/)