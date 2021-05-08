import React from 'react'
import { Table } from 'react-bootstrap'
import "./Career.css"

function Career() {
    const tabl_career = [
        {
            season: "2020 / 2021",
            Team: "Real Madrid",
            Competition: "Laliga",
            Matches_Played: "30",
            Goals_Scored: "21",
            Yellow_Cards: "2",
            Red_Cards: "0",
        },
        {
            season: "2019 / 2020",
            Team: "Real Madrid",
            Competition: "Laliga",
            Matches_Played: "37",
            Goals_Scored: "21",
            Yellow_Cards: "0",
            Red_Cards: "0",
        },
        {
            season: "2018 / 2019",
            Team: "Real Madrid",
            Competition: "Laliga",
            Matches_Played: "36",
            Goals_Scored: "21",
            Yellow_Cards: "1",
            Red_Cards: "0",
        },
        {
            season: "2017 / 2018",
            Team: "Real Madrid",
            Competition: " Laliga",
            Matches_Played: "32",
            Goals_Scored: "5",
            Yellow_Cards: "0",
            Red_Cards: "0",
        },
        {
            season: "2016 / 2017",
            Team: "Real Madrid",
            Competition: "Laliga",
            Matches_Played: "29",
            Goals_Scored: "11",
            Yellow_Cards: "0",
            Red_Cards: "0",
        },
        {
            season: "2015 / 2016",
            Team: "Real Madrid",
            Competition: "Laliga",
            Matches_Played: "29",
            Goals_Scored: "15",
            Yellow_Cards: "1",
            Red_Cards: "0",
        }
    ]

    return (
        <Table striped bordered hover variant="sm" className="sys">
            <thead >
                <tr >
                    <th>season</th>
                    <th>Team</th>
                    <th>Competition</th>
                    <th>Matches Played</th>
                    <th>Goals Scored</th>
                    <th>Yellow Cards</th>
                    <th>Red Cards</th>
                </tr>
            </thead>
            <tbody>
               
                    {tabl_career.map((el, index) =>
                        <tr key={index} className="tablcss">
                            <td>{el.season}</td>
                            <td>{el.Team}</td>
                            <td>{el.Competition}</td>
                            <td>{el.Matches_Played}</td>
                            <td>{el.Goals_Scored}</td>
                            <td>{el.Yellow_Cards}</td>
                            <td>{el.Red_Cards}</td>
                        </tr>)}
                
            </tbody>
        </Table>
    )
}

export default Career
