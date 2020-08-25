# Socio-economic disparities and COVID-19 in USA  
### Ayan Paul, Philipp Englert and Melinda Varga  

This repository contains all the codes necessary for collection, curation and
analysis of the results in this paper. The scripts for making the plots and the
plots are also included  

Directory Struture:  
```
.
├── Maps
│   ├── data
│   │   └── US
│   │       ├── confirmed.json
│   │       ├── deaths.json
│   │       ├── Density.json
│   │       ├── Employed.json
│   │       ├── Income.json
│   │       ├── Labour.json
│   │       ├── MeanCommute.json
│   │       ├── Non-White.json
│   │       ├── Poverty.json
│   │       ├── SeniorCitizen.json
│   │       ├── Transit.json
│   │       ├── Unemployment.json
│   │       └── Uninsured.json
│   ├── js
│   │   ├── maps-US.js
│   │   └── us-all-all-highres.js
│   └── maps-US.html
├── Notebooks
│   ├── mapdata-US.ipynb
│   └── The-Unfair-World-USA.ipynb
├── plots
│   ├── EC_Corr.png
│   ├── EC_CR.png
│   ├── EC_DR.png
│   ├── SS_Corr.png
│   ├── SS_CR.png
│   ├── SS_DR.png
│   ├── USA_Corr.png
│   ├── USA_CR.png
│   ├── USA_DR.png
│   ├── WC_Corr.png
│   ├── WC_CR.png
│   └── WC_DR.png
├── LICENSE
└── README.md     
```

used package versions:  
numpy version: 1.17.2  
pandas version: 1.0.5  
sklearn version: 0.21.3  
xgboost version: 1.0.2  
shap version: 0.34.0  
matplotlib version: 2.2.3  
seaborn version: 0.9.0  