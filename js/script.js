const botao = document.querySelector('.bt_confirm')
botao.addEventListener('click', verific)

function verific() {
    let titleDay = document.querySelector('.Day')
    let titleMonth = document.querySelector('.Month')
    let titleYear = document.querySelector('.Year')

    let inputDay = document.querySelector('#DD')
    let inputMonth = document.querySelector('#MM')
    let inputYear = document.querySelector('#YYYY')

    let errorDay = document.querySelector('.error_DD')
    let errorMonth = document.querySelector('.error_MM')
    let errorYear = document.querySelector('.error_YYYY')

    let AnoAtual = new Date().getFullYear() - 1
    let resDay = document.querySelector('.res_days')
    let resMonth = document.querySelector('.res_month')
    let resYear = document.querySelector('.res_years')

    if (inputDay.value == '') {
        errorDay.innerHTML = 'This field is required'
        inputDay.style.border = '1px solid hsl(0, 100%, 67%)'
        titleDay.style.color = 'hsl(0, 100%, 67%)'

    } else if (inputDay.value <= 0 || inputDay.value > 31) {
        errorDay.innerHTML = 'Must be a valid day'
        inputDay.style.border = '1px solid hsl(0, 100%, 67%)'
        titleDay.style.color = 'hsl(0, 100%, 67%)'
    } else {
        errorDay.innerHTML = ''
        inputDay.style.border = ''
        titleDay.style.color = ''
    }


    if (inputMonth.value == '') {
        errorMonth.innerHTML = 'This field is required'
        inputMonth.style.border = '1px solid hsl(0, 100%, 67%)'
        titleMonth.style.color = 'hsl(0, 100%, 67%)'

    } else if (inputMonth.value <= 0 || inputMonth.value > 12) {
        errorMonth.innerHTML = 'Must be a valid months'
        inputMonth.style.border = '1px solid hsl(0, 100%, 67%)'
        titleMonth.style.color = 'hsl(0, 100%, 67%)'
    } else {
        errorMonth.innerHTML = ''
        inputMonth.style.border = ''
        titleMonth.style.color = ''
    }

    if (inputYear.value == '') {
        errorYear.innerHTML = 'This field is required'
        inputYear.style.border = '1px solid hsl(0, 100%, 67%)'
        titleYear.style.color = 'hsl(0, 100%, 67%)'

    } else if (inputYear.value <= 1000 || inputYear.value > AnoAtual) {
        errorYear.innerHTML = 'Must be a valid year'
        inputYear.style.border = '1px solid hsl(0, 100%, 67%)'
        titleYear.style.color = 'hsl(0, 100%, 67%)'
    } else {
        errorYear.innerHTML = ''
        inputYear.style.border = ''
        titleYear.style.color = ''

        resYear.innerHTML = AnoAtual - `${inputYear.value}`
        resMonth.innerHTML = (`${inputDay.value}` * `${inputMonth.value}`).toFixed(0)
        resDay.innerHTML = (365 / (AnoAtual - `${inputYear.value}`)).toFixed(0)
    }
}