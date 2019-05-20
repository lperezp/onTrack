import { SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TaskSQLiteService {
  db: SQLiteObject = null;
  constructor() {}

  setDatabase(db: SQLiteObject) {
    if (this.db === null) {
      this.db = db;
    }
  }

  // CREATE TABLES
  createAllTables() {
    this.createTableJobs();
    this.createTableServices();
    this.createTableSurveys();
    this.createTableAttributeValue();
    this.createTableEvidence();
  }
  createTableJobs() {
    let table_jobs =
      "CREATE TABLE IF NOT EXISTS table_jobs( user_configurations_id INTEGER,companies_id INTEGER,locations_id INTEGER,jobs_id INTEGER,job_sequence TEXT,job_legacy_code TEXT,job_schedule_date TEXT,job_turn TEXT,job_tag TEXT,job_alert TEXT,job_updated_at TEXT,customers_id INTEGER,suppliers_id INTEGER,services_id INTEGER,service_name TEXT,origen_entity_id TEXT,origen_entity_code TEXT,origen_entity_name TEXT,origen_entity_info TEXT,origen_entity_taxpayer_code TEXT,origen_entity_taxpayer_info TEXT,origen_code TEXT,origen_name TEXT,origen_info TEXT,origen_address TEXT,origen_reference TEXT,origen_latitude TEXT,origen_longitude TEXT,origen_observations TEXT,origen_contact_fullname TEXT,origen_contact_job_title TEXT,origen_contact_telephone TEXT,destination_entity_id INTEGER,destination_entity_code TEXT,destination_entity_name TEXT,destination_entity_info TEXT,destination_entity_taxpayer_code TEXT,destination_entity_taxpayer_info TEXT,destination_code TEXT,destination_name TEXT,destination_info TEXT,destination_address TEXT,destination_reference TEXT,destination_latitude TEXT,destination_longitude TEXT,destination_observations TEXT,destination_contact_fullname TEXT,destination_contact_job_title TEXT,destination_contact_telephone TEXT,product_name TEXT,actual_job_status_id INTEGER,actual_status_colour TEXT,actual_status_sequence INTEGER,actual_status_name TEXT)";
    return this.db.executeSql(table_jobs, []).catch(err => {
      console.log("Error", err);
    });
  }

  createTableServices() {
    let table_services =
      "CREATE TABLE IF NOT EXISTS table_services(services_id INTEGER,service_name TEXT,statuses TEXT)";
    return this.db.executeSql(table_services, []).catch(err => {
      console.log("Error", err);
    });
  }

  createTableSurveys() {
    let table_surveys =
      "CREATE TABLE IF NOT EXISTS table_surveys(domains_id INTEGER,domain_name TEXT, groups TEXT)";
    return this.db.executeSql(table_surveys, []).catch(err => {
      console.log("Error", err);
    });
  }

  createTableAttributeValue() {
    let table_attribute_values =
      "CREATE TABLE IF NOT EXISTS table_attribute_values(attributes_id INTEGER,at_values TEXT)";
    return this.db.executeSql(table_attribute_values, []).catch(err => {
      console.log("Error", err);
    });
  }

  createTableEvidence() {
    let table_evidence_configurations =
      "CREATE TABLE IF NOT EXISTS table_evidence_configurations(domains_id INTEGER,domains_name TEXT,quantity INTEGER)";
    return this.db.executeSql(table_evidence_configurations, []).catch(err => {
      console.log("Error", err);
    });
  }

  // INSERT DATA
  insertJobs(task: any) {
    let sql =
      "INSERT INTO table_jobs( user_configurations_id,companies_id ,locations_id ,jobs_id ,job_sequence ,job_legacy_code , job_schedule_date , job_turn , job_tag , job_alert ,job_updated_at , customers_id , suppliers_id , services_id , service_name , origen_entity_id , origen_entity_code , origen_entity_name , origen_entity_info , origen_entity_taxpayer_code , origen_entity_taxpayer_info , origen_code ,origen_name , origen_info , origen_address , origen_reference , origen_latitude , origen_longitude , origen_observations , origen_contact_fullname , origen_contact_job_title , origen_contact_telephone , destination_entity_id , destination_entity_code , destination_entity_name , destination_entity_info , destination_entity_taxpayer_code ,destination_entity_taxpayer_info ,destination_code , destination_name , destination_info , destination_address , destination_reference , destination_latitude , destination_longitude , destination_observations , destination_contact_fullname , destination_contact_job_title , destination_contact_telephone ,product_name ,actual_job_status_id ,actual_status_colour ,actual_status_sequence ,actual_status_name ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    return this.db.executeSql(sql, [task.title, task.completed]);
  }

  insertServices(task: any) {
    let sql =
      "INSERT INTO table_services(services_id,service_name,statuses) VALUES(?,?,?)";
    return this.db.executeSql(sql, [task.title, task.completed]);
  }

  insertSurveys(task: any) {
    let sql =
      "INSERT INTO table_surveys(domains_id,domain_name,groups) VALUES(?,?,?)";
    return this.db.executeSql(sql, [task.title, task.completed]);
  }

  insertAttributeValue(task: any) {
    let sql =
      "INSERT INTO table_attribute_values(attributes_id ,at_values ) VALUES(?,?)";
    return this.db.executeSql(sql, [task.title, task.completed]);
  }

  insertEvidence(task: any) {
    let sql =
      "INSERT INTO table_evidence_configurations(domains_id ,domains_name,quantity) VALUES(?,?,?)";
    return this.db.executeSql(sql, [task.title, task.completed]);
  }

  // GET DATA
  getAllJobs() {
    let sql = "SELECT * FROM table_jobs";
    return this.db
      .executeSql(sql, [])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));
  }
}
