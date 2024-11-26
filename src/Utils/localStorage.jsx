const employees = [
    {
      id: 1,
      firstName: "Aarav",
      email: "a@a.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Prepare Project Report",
          taskDescription: "Compile the Q4 project report for submission.",
          taskDate: "2024-11-28",
          category: "Reporting"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Update Client Database",
          taskDescription: "Ensure all client records are up to date in the CRM.",
          taskDate: "2024-11-20",
          category: "Data Management"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Team Meeting Preparation",
          taskDescription: "Prepare agenda and presentation for next week's team meeting.",
          taskDate: "2024-11-30",
          category: "Meetings"
        }
      ],
      taskNumber: { active: 2, newTask: 1, completed: 1, failed: 0 }
    },
    {
      id: 2,
      firstName: "Ananya",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Fix Website Bugs",
          taskDescription: "Resolve reported issues on the company website.",
          taskDate: "2024-11-25",
          category: "Development"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Implement Security Patch",
          taskDescription: "Apply the latest security patch to all servers.",
          taskDate: "2024-11-26",
          category: "IT"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Write Blog Post",
          taskDescription: "Publish a new blog post about company achievements.",
          taskDate: "2024-11-10",
          category: "Content Creation"
        }
      ],
      taskNumber: { active: 1, newTask: 2, completed: 1, failed: 0 }
    },
    {
      id: 3,
      firstName: "Ishaan",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Coordinate Office Move",
          taskDescription: "Oversee logistics for the office relocation.",
          taskDate: "2024-12-01",
          category: "Logistics"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: true,
          taskTitle: "Client Presentation",
          taskDescription: "Prepare slides for the client presentation.",
          taskDate: "2024-11-15",
          category: "Client Management"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Research New Technologies",
          taskDescription: "Investigate emerging tools for process optimization.",
          taskDate: "2024-11-27",
          category: "Research"
        }
      ],
      taskNumber: { active: 2, newTask: 2, completed: 0, failed: 1 }
    },
    {
      id: 4,
      firstName: "Diya",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Inventory Audit",
          taskDescription: "Conduct an audit of the company's inventory.",
          taskDate: "2024-11-29",
          category: "Audit"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Team Training",
          taskDescription: "Organize training sessions for the new hires.",
          taskDate: "2024-11-18",
          category: "Training"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Vendor Negotiation",
          taskDescription: "Negotiate contracts with new suppliers.",
          taskDate: "2024-11-22",
          category: "Procurement"
        }
      ],
      taskNumber: { active: 1, newTask: 1, completed: 1, failed: 1 }
    },
    {
      id: 5,
      firstName: "Neha",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Social Media Campaign",
          taskDescription: "Launch and monitor the holiday marketing campaign.",
          taskDate: "2024-11-25",
          category: "Marketing"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Customer Feedback Analysis",
          taskDescription: "Analyze the customer feedback survey results.",
          taskDate: "2024-11-28",
          category: "Analysis"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: true,
          taskTitle: "Internal Compliance Check",
          taskDescription: "Review internal processes for compliance with regulations.",
          taskDate: "2024-11-23",
          category: "Compliance"
        }
      ],
      taskNumber: { active: 2, newTask: 2, completed: 0, failed: 1 }
    }
  ];
  
  
  const admin = [
    {
      "id": 1,
      "firstName": "Admin",
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () =>{
    
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    // console.log(employees)
    // console.log(admin)
    return {employees, admin};
}