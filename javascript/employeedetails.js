    let employees=[
        {'name':'kavith','age':28,'salary':15000,'department':'HR'},
        {'name':'jack','age':25,'salary':20000,'department':'IT'},
        {'name':'john','age':27,'salary':25000,'department':'FRONTEND'},
        {'name':'raj','age':32,'salary':30000,'department':'BACKEND'},
        {'name':'jade','age':30,'salary':40000,'department':'FINANCE'},
        {'name':'clara','age':33,'salary':45000,'department':'TESTING'},
        {'name':'peter','age':29,'salary':50000,'department':'INFRA'},
    ]

    //TRADITIONAL FOR LOOP
    for(let i=0;i<employees.length;i++)
    console.log(employees[i])

    //for each
    employees.forEach(e=>console.log(e))