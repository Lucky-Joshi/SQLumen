# SQLUMEN Documentation

SQLUMEN documentation describes the product, architecture, technical contracts, user experience, testing strategy, Intelligence Layer, and engineering operations.

## Recommended Reading Order

1. [Project Glossary](./00_Project_Glossary.md)
2. [Product](./01_Product/)
3. [Architecture](./02_Architecture/)
4. [Technical](./03_Technical/)
5. [UI/UX](./04_UI/)
6. [Testing](./05_Testing/)
7. [Intelligence](./06_Intelligence/)
8. [Operations](./07_Operations/)

## Documentation Phases

| Phase | Purpose |
| --- | --- |
| 00 Glossary | Shared terminology and definitions |
| 01 Product | Vision, scope, users, personas, and use cases |
| 02 Architecture | System layers, modules, data flow, and responsibilities |
| 03 Technical | Parser, graph, privacy, errors, rules, and technical decisions |
| 04 UI/UX | Wireframes, design system, components, accessibility, and interaction |
| 05 Testing | Test strategy, fixtures, regression, performance, and acceptance |
| 06 Intelligence | Context, prompts, explanations, safety, evaluation, and model configuration |
| 07 Operations | Development, workflow, releases, deployment, contribution, and roadmap |

## Current Project Status

The documentation blueprint is complete through Phase 7. Production implementation has not yet been started.

## Navigation

### Product

- [Project Specification](./01_Product/01_Project_Spec.md)
- [Project Vision](./01_Product/02_Project_Vision.md)
- [Scope and Non-Goals](./01_Product/03_Scope_and_NonGoals.md)
- [Problem Statement](./01_Product/04_Problem_Statement.md)
- [Target Users](./01_Product/05_Target_Users.md)
- [User Personas](./01_Product/06_User_Personas.md)
- [Use Cases](./01_Product/07_Use_Cases.md)

### Architecture

- [System Architecture](./02_Architecture/01_System_Architecture.md)
- [Architecture Diagram](./02_Architecture/02_Architecture_Diagram.md)
- [Internal Data Model](./02_Architecture/03_Internal_Data_Model.md)
- [Module Design](./02_Architecture/04_Module_Design.md)
- [Folder Structure](./02_Architecture/05_Folder_Structure.md)
- [Request Flow](./02_Architecture/06_Request_Flow.md)
- [Component Responsibilities](./02_Architecture/07_Component_Responsibilities.md)

### Technical

- [ADR](./03_Technical/01_ADR.md)
- [SQL Dialect Support](./03_Technical/02_SQL_Dialect_Support.md)
- [Parser Design](./03_Technical/03_Parser_Design.md)
- [Graph Model](./03_Technical/04_Graph_Model.md)
- [Node Definitions](./03_Technical/05_Node_Definitions.md)
- [Error Handling](./03_Technical/06_Error_Handling.md)
- [Privacy Model](./03_Technical/07_Privacy_Model.md)
- [Intelligence Design](./03_Technical/08_LLM_Design.md)
- [Optimization Rules](./03_Technical/09_Optimization_Rules.md)

### UI/UX

- [Wireframes](./04_UI/01_Wireframes.md)
- [Design System](./04_UI/02_Design_System.md)
- [Theme System](./04_UI/03_Theme_System.md)
- [Node System](./04_UI/04_Node_System.md)
- [Component Library](./04_UI/05_Component_Library.md)
- [Interaction Model](./04_UI/06_Interaction_Model.md)
- [Accessibility](./04_UI/07_Accessibility.md)
- [Animations](./04_UI/08_Animations.md)
- [UX Principles](./04_UI/09_User_Experience_Principles.md)

### Testing

- [Test Strategy](./05_Testing/01_Test_Strategy.md)
- [Test Query Suite](./05_Testing/02_Test_Query_Suite.md)
- [Expected Outputs](./05_Testing/03_Expected_Outputs.md)
- [Sample DDL](./05_Testing/04_Sample_DDL.md)
- [Sample EXPLAIN](./05_Testing/05_Sample_EXPLAIN.md)
- [Regression Testing](./05_Testing/06_Regression_Testing.md)
- [Manual Test Checklist](./05_Testing/07_Manual_Test_Checklist.md)
- [Performance Testing](./05_Testing/08_Performance_Testing.md)
- [Acceptance Criteria](./05_Testing/09_Acceptance_Criteria.md)
- [Bug Report Template](./05_Testing/10_Bug_Report_Template.md)
- [Test Data Generator](./05_Testing/11_Test_Data_Generator.md)

### Intelligence

- [Intelligence Architecture](./06_Intelligence/01_Intelligence_Architecture.md)
- [Context Builder](./06_Intelligence/02_Context_Builder.md)
- [Prompt Design](./06_Intelligence/03_Prompt_Design.md)
- [Explanation Modes](./06_Intelligence/04_Explanation_Modes.md)
- [Optimization Strategy](./06_Intelligence/05_Optimization_Strategy.md)
- [Interview Mode](./06_Intelligence/06_Interview_Mode.md)
- [Query Rewrite](./06_Intelligence/07_Query_Rewrite.md)
- [Safety and Hallucination](./06_Intelligence/08_Safety_and_Hallucination.md)
- [Intelligence Evaluation](./06_Intelligence/09_AI_Evaluation.md)
- [Model Configuration](./06_Intelligence/10_Model_Configuration.md)
- [Explanation Templates](./06_Intelligence/11_Explanation_Templates.md)
- [Intelligence Output Schema](./06_Intelligence/12_AI_Output_Schema.md)

### Operations

- [Local Development](./07_Operations/01_Local_Development.md)
- [Environment Setup](./07_Operations/02_Environment_Setup.md)
- [Project Workflow](./07_Operations/03_Project_Workflow.md)
- [Coding Standards](./07_Operations/04_Coding_Standards.md)
- [Git Workflow](./07_Operations/05_Git_Workflow.md)
- [Branching Strategy](./07_Operations/06_Branching_Strategy.md)
- [Release Process](./07_Operations/07_Release_Process.md)
- [Versioning](./07_Operations/08_Versioning.md)
- [Deployment](./07_Operations/09_Deployment.md)
- [CI/CD](./07_Operations/10_CI_CD.md)
- [Contributing](./07_Operations/11_Contributing.md)
- [Project Roadmap](./07_Operations/12_Project_Roadmap.md)
- [Project Backlog](./07_Operations/13_Project_Backlog.md)
- [Known Limitations](./07_Operations/14_Known_Limitations.md)
- [Future Work](./07_Operations/15_Future_Work.md)
- [Product Principles](./07_Operations/16_Product_Principles.md)
- [Decision Log](./07_Operations/17_Decision_Log.md)