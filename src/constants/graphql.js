import gql from 'graphql-tag'


export const READ_EXPENSES = gql `
query{
    expenses{
        amount
        expense_name
        date
        category
    }
}
`

export const ADD_EXPENSES = gql `
mutation addExpenses($date: date!, $amount: numeric!, $category: String!,$expense_name: String!){
    insert_expenses(objects:[{
        date: $date,
        amount: $amount,
        expense_name: $expense_name,
        category: $category
    }]){
        affected_rows
    }
}
`

export const UPDATE_EXPENSES = gql `
mutation UPDATE_EXPENSES($amount: numeric!,$category: String!, $date: date!, $expense_name: String!){ 
  
  update_expenses(where: {date:{_eq:$date}},
  _set:{
    date: $date,
    amount: $amount,
    category: $category,
    expense_name: $expense_name
  }
  ){
    affected_rows
  }
}
`

export const DELETE_ALL = gql `
mutation DELETE_BY_DATE($date: date!) {
    delete_expenses(where: {
        date: {
            _eq: $date
        }
    }) {
        affected_rows
    }
}

`

export const DELETE_BY_DATE = gql `
mutation DELETE_BY_DATE($date: date!) {
    delete_expenses(where: {
        date: {
            _lte: $date
        }
        _or: {
            date: {
                _gte: $date
            }
        }
    }) {
        affected_rows
    }
}
`

export const CHART_QUERY = gql `
query{
    expenses{
        data: amount,
        label: date
    }
}
`