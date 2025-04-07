import { users, type User, type InsertUser, type ContactFormData, type Contact } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: Omit<Contact, "id">): Promise<Contact>;
  getContactSubmissions(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, Contact>;
  private userCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(contact: Omit<Contact, "id">): Promise<Contact> {
    const id = this.contactCurrentId++;
    const newContact = { ...contact, id };
    this.contactSubmissions.set(id, newContact);
    return newContact;
  }

  async getContactSubmissions(): Promise<Contact[]> {
    return Array.from(this.contactSubmissions.values());
  }
}

export const storage = new MemStorage();
