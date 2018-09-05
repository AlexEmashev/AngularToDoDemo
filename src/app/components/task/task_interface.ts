/**
 * Single task interface
 */
export interface ITask {
  /**
   * ID of a task
   */
  id: number
  /**
   * Text of a task
   */
  text: string
  /**
   * true if task complete
   */
  complete: boolean,
  /**
   * true if task is archived
   */
  archived?: boolean,
  /**
   * Set date of completeon
   */
  completedOn?: Date
}