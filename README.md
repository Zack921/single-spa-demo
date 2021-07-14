## 子应用独立调试
```
cd app1
yarn serve
```

## 启动整个微前端项目
### 1. 启动子应用
```
cd app1
yarn serve:micro

cd app2
yarn serve:micro
```
### 2. 启动主应用
```
cd main
yarn serve
```