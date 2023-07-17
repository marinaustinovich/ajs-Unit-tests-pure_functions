# Домашнее задание к лекции «Unit-тестирование»

# ajs-Unit-tests-pure_functions
[![Build status](https://ci.appveyor.com/api/projects/status/9kj49a0aka6j3n4d/branch/main?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ajs-unit-tests-pure-functions/branch/main)

### **Важные моменты**

1. ESLint не должен выдавать ошибок.
2. Jest должен обеспечивать 100-процентное покрытие по строкам для тестируемых функций.
3. Ко всем задачам должен быть подключён AppVeyor и выставлен бейджик статуса.
4. Используйте `import`/`export`, а не `require`.

В качестве шаблона можете использовать [готовый проект](/ci-template).

## Описание установки

```shell
npm init
# При инициалиализации в качестве тестовой команды указать:
# test command: jest --coverage
npm install --save-dev jest babel-jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

Не забудьте про `.babelrc` и `.browserslistrc`.

В `.babelrc`:
```json
{
  "presets": [["@babel/preset-env", {
    "useBuiltIns": "usage",
    "corejs": 3
  }]]
}
```

Запуск тестов:
```shell
npm test
```

---

## Чистые функции

### Легенда

Во время игры вам нужно будет отображать полоску жизни над игровым персонажем. Для сигнализации пользователю вы решили добавить цветовую индикацию:
- здоровье более 50 — зелёный;
- здоровье от 50 и до 15 — жёлтый;
- здоровье менее 15 — красный.

### Описание

Реализуйте функцию, которая принимает на вход объект в виде:
```javascript
{name: 'Маг', health: 90}
```
И возвращает ответ в виде одной из строк: `healthy`, `wounded`, `critical`.

Сгенерируйте проект на базе `npm`. Подключите туда `jest` и напишите автотесты, которые обеспечивают 100-процентное покрытие вашей функции по строкам.

Убедитесь, что вы обеспечили 100-процентное покрытие тестами.

---
