import { APIKey, APIToken } from "../../support/constants";
class sharedDataUtils{
    createBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }

    getBoard = (boardId)=>{
        return cy.request("Get",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }

    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }
    
    getList = (boardId)=>{
        return cy.request("GET" ,`https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`)
    }

    createCard = (listId)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,{name:"new QA card"})
    }

    createTemplateCard = (listId)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,{name:"template QA card", "isTemplate": true})
    }
}
export default sharedDataUtils