'use strict';

angular.module('demoApp').service('BoardDataFactory', function () {

  return {
    kanban: {
      "name": "Kanban Board",
      "numberOfColumns": 4,
      "columns": [
        {"name": "Group Ideas", "cards": [
          {"title": "Come up with a POC for new Project"},
          {"title": "Design new framework for reporting module"}
        ]},
        {"name": "Group not started", "cards": [
          {"title": "Explore new IDE for Development",
            "details": "Testing Card Details"},
          {"title": "Get new resource for new Project",
            "details": "Testing Card Details"}
        ]},
        {"name": "Group in progress", "cards": [
          {"title": "Develop ui for tracker module",
            "details": "Testing Card Details"},
          {"title": "Develop backend for plan module",
            "details": "Testing Card Details"}
        ]},
        {"name": "Group done", "cards": [        
            
         {"title": "Test user module",
            "details": "Testing Card Details"},
          {"title": "End to End Testing for user group module",
            "details": "Testing Card Details"},
          {"title": "CI for user module",
            "details": "Testing Card Details"} 
        ]}
      ]
    },
    sprint: {
      "name": "Sprint Board",
      "numberOfColumns": 3,
      "columns": [
        {"name": "Group not started"},
        {"name": "Group in progress"},
        {"name": "Group done"}
      ],
      "backlogs": [
        {"title": "Come up with a POC for new Project",
          "details": "backlog id 1",
          "phases": [
            {"name": "Not started",
              "cards": [
                {"title": "Explore new IDE for Development",
                  "details": "Testing Card Details",
                  "status": "Not started"},
                {"title": "Get new resource for new Project",
                  "details": "Testing Card Details",
                  "status": "Not started"}
              ]},
            {"name": "In progress",
              "cards": [
                {"title": "Develop ui for tracker module",
                  "details": "Testing Card Details",
                  "status": "In progress"},
                {"title": "Develop backend for plan module",
                  "details": "Testing Card Details",
                  "status": "In progress"},
                {"title": "Test user module",
                  "details": "Testing Card Details",
                  "status": "In progress"}
              ]},
            {"name": "Done",
              "cards": [
                {"title": "End to End Testing for user group module",
                  "details": "Testing Card Details",
                  "status": "Done"},
                {"title": "CI for user module",
                  "details": "Testing Card Details",
                  "status": "Done"}
              ]}
          ]
        },
        {
          "title": "Design new framework for reporting module",
          "details": "backlog id 2",
          "phases": [
            {"name": "Not started",
              "cards": [
                {"title": "Explore new Framework",
                  "details": "Testing Card Details",
                  "status": "Not started"},
                {"title": "Get new Testing License",
                  "details": "Testing Card Details",
                  "status": "Not started"}
              ]},
            {"name": "In progress",
              "cards": [
                {"title": "Develop ui using Angular",
                  "details": "Testing Card Details",
                  "status": "In progress"},
                {"title": "Develop backend with NodeJS",
                  "details": "Testing Card Details",
                  "status": "In progress"}
              ]},
            {"name": "Done",
              "cards": [
                {"title": "Explore High charts",
                  "details": "Testing Card Details",
                  "status": "Done"}
              ]}
          ]
        }
      ]
    },
    block: {
      "columns": [
        {"name": "Ideas", "cards": [
          {"title": "Come up with a POC for new Project",
            "details": "Testing Card Details Testing Card Details Testing Card Details Testing Card Details"},
          {"title": "Design new framework for reporting module",
            "details": "Testing Card Details"},
          {"title": "Test user module",
            "details": "Testing Card Details"},
          {"title": "End to End Testing for user group module",
            "details": "Testing Card Details Testing Card Details Testing Card Details Testing Card Details Testing Card Details" +
            "Testing Card Details Testing Card Details Testing Card Details Testing Card Details Testing Card Details" +
            "Testing Card Details Testing Card Details Testing Card Details Testing Card Details Testing Card Details"},
          {"title": "CI for user module",
            "details": "Testing Card Details Testing Card Details Testing Card Details"}
        ]},
        {"name": "Not started", "cards": [
          {"title": "Explore new IDE for Development",
            "details": "Testing Card Details Testing Card Details Testing Card Details"},
          {"title": "Get new resource for new Project",
            "details": "Testing Card Details"},
          {"title": "Develop ui for tracker module",
            "details": "Testing Card Details Testing Card Details Testing Card Details Testing Card Details Testing Card" +
            "Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card" +
            "Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card" +
            "Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card" +
            "Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card Big Card"},
          {"title": "Develop backend for plan module",
            "details": "Testing Card Details"}
        ]}
      ]
    }
  };
});
