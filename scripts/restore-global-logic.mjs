import fs from "node:fs";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const sourcePath = "public/RohitKumar.pdf";
const pdf = await PDFDocument.load(fs.readFileSync(sourcePath));
const page = pdf.getPages()[0];
const regular = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);
const black = rgb(0.12, 0.12, 0.12);
const left = 40;
const right = page.getWidth() - 40;
const width = right - left;
const size = 6.35;
const lineHeight = 8;
let y = 458;

page.drawRectangle({ x: 34, y: 22, width: page.getWidth() - 68, height: 450, color: rgb(1, 1, 1) });

const draw = (text, font = regular, fontSize = size, gap = lineHeight) => {
  page.drawText(text, { x: left, y, size: fontSize, font, color: black });
  y -= gap;
};

const wrap = (text) => {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (!current || regular.widthOfTextAtSize(candidate, size) <= width - 9) current = candidate;
    else { lines.push(current); current = word; }
  }
  if (current) lines.push(current);
  return lines;
};

const bullet = (text) => {
  for (const [index, line] of wrap(text).entries()) {
    draw(index === 0 ? `- ${line}` : `  ${line}`);
  }
  y -= 1;
};

draw("WORK EXPERIENCE", bold, 8.5, 12);
page.drawLine({ start: { x: left, y: y + 4 }, end: { x: right, y: y + 4 }, thickness: 0.65, color: black });
y -= 5;
draw("System Engineer | Automation Test Engineer", bold, size, 8.5);
draw("Project - Arthrex Inc.", bold, size, 8);
draw("05-May-2026 - Present | Automation Test Engineer", italic, size, 9.5);
[
  "Performed regression and functional testing on new builds across QA and Stage environments; analyzed failures, identified legitimate bugs, and delivered daily regression reports to stakeholders.",
  "Conducted manual functional testing on assigned features: analyzed requirements, designed scenarios, authored test cases and steps, executed them, and transitioned validated features into automation test specs.",
  "Developed and maintained automation scripts using Playwright with TypeScript, ensuring robust coverage and validation of new features.",
  "Enhanced and maintained the automation framework, integrating with Azure DevOps and GitHub for version control and collaboration.",
  "Leveraged Agentic AI with VS Code by creating multiple custom agents to streamline tasks, including preventing duplicate locators and methods, accelerating script fixes, and automating repetitive validations.",
  "Managed and optimized CI/CD pipelines using Docker, ensuring smooth test execution and deployment cycles.",
  "Collaborated in Agile ceremonies, including daily stand-ups, sprint planning, and defect triage, and contributed to continuous improvement of QA processes.",
  "Delivered cross-functional support by combining manual and automation expertise, ensuring faster feedback loops and higher product quality.",
].forEach(bullet);

draw("Project - Zurich Insurance Pvt. Ltd.", bold, size, 8);
draw("15-Oct-2025 - 30-Apr-2026 | Automation Test Engineer", italic, size, 9.5);
[
  "Designed and executed automation test scripts using Selenium WebDriver with Java, ensuring coverage of core insurance workflows.",
  "Performed functional and regression testing across multiple modules, validating policy creation, claims, and customer service features.",
  "Authored and maintained test cases, scenarios, and test data; collaborated with business analysts to ensure alignment with requirements.",
  "Utilized SQL queries for backend validation, data integrity checks, and cross-verification of transactional records.",
  "Enhanced the automation framework by implementing reusable components and applying Page Object Model (POM) for scalability.",
  "Integrated test execution with Jenkins CI/CD pipelines, enabling continuous feedback and faster release cycles.",
  "Logged and tracked defects in JIRA, participated in defect triage meetings, and ensured proper defect lifecycle management.",
  "Collaborated with developers, QA team, and stakeholders in an Agile/Scrum environment, contributing to sprint planning and daily stand-ups.",
].forEach(bullet);

draw("GlobalLogic Technologies Pvt. Ltd. | Feb 2021 - Sep 2025", bold, size, 8);
draw("Test Engineer", italic, size, 9.5);
[
  "Worked on e-commerce domain applications, focusing on automation and functional testing.",
  "Developed and executed automation test scripts using Selenium WebDriver with Java and TestNG.",
  "Contributed to the existing automation framework by enhancing reusable components.",
  "Implemented Page Object Model (POM) to improve test maintainability and scalability.",
  "Performed regression testing, smoke testing, and cross-browser testing.",
  "Used XPath and CSS selectors for dynamic web element identification.",
  "Handled synchronization issues using explicit and implicit waits.",
  "Integrated test execution with Jenkins for continuous integration.",
  "Logged and tracked defects using JIRA, ensuring proper defect lifecycle management.",
  "Collaborated with developers and the QA team in an Agile/Scrum environment.",
].forEach(bullet);

fs.writeFileSync(sourcePath, await pdf.save());